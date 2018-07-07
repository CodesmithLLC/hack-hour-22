'use strict';
const config = require('./config.json');
const sendgrid = require('sendgrid');
const email_helper = sendgrid.mail;
const from_email = new email_helper.Email("hello@codesmith.io");
const email_subject = 'hack hour results';
const sg = sendgrid.SendGrid(config.sendgrid.API_KEY);
const Mocha = require('mocha');
const fs = require('fs');
// sendgrid helper values to be updated on each sent email
var to_email;
var email_content;
var mailJSON;

// true if merge, false if pull
const TRAVIS_SECURE_ENV_VARS = process.env.TRAVIS_SECURE_ENV_VARS === 'true';

const EmailReporter = require('mocha-email-reporter');
// const EmailReporter = require('../../mocha-email-reporter/index.js');
const reportCard = new (require('./util/report-card'));
const async = require('async');

const outputFile = `${__dirname}/output.json`;
const reportFile = `${__dirname}/reportCard.json`;

const GithubApi = require('./util/GithubApi');
const hookStdOut = require('./util/hookStdOut');

const org = 'CodesmithLLC';
const repo = `hack-hour-${process.env.COHORT}`;
const commit = process.env.TRAVIS_COMMIT;
const pull = process.env.TRAVIS_PULL_REQUEST;
const token = process.env.GITHUB_TOKEN || config.github.access_token;

const githubApi = new GithubApi({ token, org });

const mocha = new Mocha({ timeout: 5000 });

const committer = {};

async.waterfall([

  function getCommitInfo(next) {
    githubApi.commitInfo({ repo, commit }, (err, response, body) => {
      if (err) console.error('Hit an error in getCommitInfo function. Error is:', err);
      if (err) return next(err);

      if (!pull || pull === 'false') {
        // console.log(`This is a pull request. Get the user info for commit merge` +
        //   ` parent ${body.commit.message.split(' ').slice(-1)[0]}`);

        return githubApi.commitInfo({
          repo,
          commit: body.commit.message.split(' ').slice(-1)[0],
        }, next);
      }

      return next(null, response, body);
    });
  },

  function addTests(response, body, next) {
    if (!body || !body.files || !Array.isArray(body.files)) {
      console.error('Hit an error in addTests function. Body is:', body);
      return next('No files in commit.');
    }
    try {
      committer.github = body.author.login;
      committer.name = body.commit.author.name;
      committer.email = body.commit.author.email;
    } catch (e) {
      console.error('Hit an error in addTests function. Committer is:', committer);
      return next('Could not get author details for commit. Aborting.', e);
    }

    const files = body.files.filter(obj =>
      obj.status !== 'removed' && obj.filename.match(/challenges\/[\w\-]+\.js/)
    ).map(obj => {
      try {
        return obj.filename.match(/challenges\/([\w\-]+)\.js/)[1];
      } catch (err) {
        console.error(err, `oops, the regexp attempting to match the hack hour name
 errored. They are supposed to look like this: "challenges/hack-hour-name.js"`);
      }
    });

    const tests = fs.readdirSync('test/tests')
      .filter(file => files.indexOf(file.slice(0, -8)) !== -1);

    if (tests.length) {
      tests.forEach(file => {
        mocha.addFile(`${__dirname}/tests/${file}`);
        reportCard.addFile(`${__dirname}/tests/${file}`);
        console.log('adding file', file);
      });
      return githubApi.pullInfo({ repo, pull }, next);
    }
    console.error('Hit an error in addTests function. No matching tests found');
    return next('No tests to run.');
  },

  function ensureCorrectBranch(response, body, next) {
    if (TRAVIS_SECURE_ENV_VARS) {
      console.log(`This is a merge, so no point in trying to merge.`);
      return next(null, null, { merged: true });
    }
    if (!body || !body.head || !body.user || !body.base) return process.exit(1);

    const sha = body.head.sha;
    const userLogin = body.user.login;
    const baseRef = body.base.ref;
    const message = `Merging ${commit}`;

    // don't merge pull request if just testing
    if (process.env.NODE_ENV === 'test') return next(null, null, { merged: true });

    if (userLogin === baseRef) {
      console.log('repo:', repo, '\nsha:', sha, '\npull:', pull, '\nmessage:', message);
      return githubApi.mergePullRequest({ repo, sha, pull, message }, next);
    }

    githubApi.updatePullRequest({ repo, pull, data: { state: 'closed' } }, (err) => {
      if (err) console.error('Hit an error in ensureCorrectBranch (updatePullRequest). err is:', err);
      return next(`You pulled to the ${baseRef} branch but need to pull to the ` +
                  `${userLogin} branch.\nYour pull request has been automatically ` +
                  `closed.\nIn order to see your test results, make a new pull ` +
                  `request to the ${userLogin} branch.`);
    });
  },

  function runTests(response, body, next) {
    var emailString = '';

    if (!body || !body.merged) {
      console.error('Hit an error in runTests function. Body is:', body);
      return next('Pull request could not be merged, potentially due to a merge ' +
                  'conflict. Resolve any Git issues locally and try again.');
    }

    const unhook = hookStdOut((string) => {
      emailString += string;
    });

    const header = `<h1>Hack Hour Result for ${committer.name}</h1>` +
                 `<h3>${new Date().toISOString().slice(0, 10)}</h3>${emailString}`;

    try {
      mocha.reporter(EmailReporter, {
        json: `${__dirname}/output.json`,
        header,
      }).run(() => {
        unhook();
        reportCard.run(reportFile, postReportCard);
        return next(null, emailString);
      });
    } catch (testErr) {
      console.error('Hit an error in runTests function. Error is:', testErr);
      return next(testErr.toString());
    }
  },

  function sendEmail(str, next) {
    var emailString = str;
    var errString;
    var solutionFiles;
    const results = require(outputFile);

    if (TRAVIS_SECURE_ENV_VARS) {
      console.log('Not sending email because this is a secure merge. (Email already sent)');
      return next(null);
    }

    // Chop off after </html> because we're going to add more text
    emailString = emailString.substring(0, emailString.indexOf('</html>'));

    // If the tests console.logged any errors, they'll end up in front of <html> on the string.
    errString = emailString.substring(0, emailString.indexOf('<html>'));

    // Add errors to end of email and remove from front of email
    if (errString) {
      emailString = emailString.substring(emailString.indexOf('<html>'));
      emailString += `<p>Encountered the following errors running your code: ${errString}</p>`;
    }

    // Add our suggested solutions to the email if they earned them
    solutionFiles = Object.keys(results.suites)
      .map(key => results.suites[key])
      .filter(suite => Object.keys(suite.tests).every(key => suite.tests[key].pass))
      .map(suite => `${suite.file.split('/').slice(-1)[0].slice(0, -8)}.js`)
      .filter(filename => {
        try {
          return fs.statSync(`${__dirname}/solutions/${filename}`).isFile();
        } catch (e) {
          console.log(`no solution file for ${filename.slice(0, -3)}`);
          return false;
        }
      });

    emailString +=
      solutionFiles.map(solution => {
        console.log(`adding solution for ${solution.slice(0, -3)}`);
        const solutionDirname = `${__dirname}/solutions/${solution}`;
        return `<hr><p>Nice job passing the tests for <strong><code>${solution.slice(0, -3)}
</code></strong>! Check out our solution below and see how it compares to yours.
<strong>Please</strong> don't share this code with others until they've
completed the challenge.<pre><code>${fs.readFileSync(solutionDirname, 'utf8')}
</code></pre>`;
      }).join('<br>');

    emailString += '</html>';

    // setup sendgrid email for sending
    let to_email = new email_helper.Email(`${committer.email}`)
    email_content = new email_helper.Content("text/html", emailString)
    mailJSON = new email_helper.Mail(from_email, email_subject, to_email, email_content)

    // send email
    let reqBody = mailJSON.toJSON()
    let req = sg.emptyRequest()
    req.method = 'POST'
    req.path = '/v3/mail/send'
    req.body = reqBody
    sg.API(req, function (res) {
      console.log('res statusCOde ', res.statusCode)
      console.log('emailing to:', to_email)
    })

    next(null);
  },

  function postResults(next) {
    var results;

    if (process.env.NODE_ENV === 'test') return next(null);
    if (!TRAVIS_SECURE_ENV_VARS) {
      console.log('No secure env vars since this is not a merge. Not posting to Dynamo.');
      return next(null);
    }
    const dynamodbDoc = require('./util/dynamodbDoc')(
      process.env.AWS_ACCESS_KEY_ID,
      process.env.AWS_SECRET_ACCESS_KEY
    );

    results = require(outputFile);
    results.github = committer.github;
    results.name = committer.name;
    results.timestamp = new Date().toISOString();

    dynamodbDoc.put({ TableName: repo, Item: results }, (err) => {
      if (err) {
        console.log(`Couldn't add json file to dynamo: ${JSON.stringify(results)}` +
                    ` in ${repo}. Error: ${err}`);
      }
      return next(null);
    });
  },

], (err) => {
  if (err) {
    console.error(`Hit an error running the tests. Notifying ${committer.email}.`);
    const text = `We hit a runtime error and couldn't test your code. Please resolve
 the following error and then try again: ${err}.`;
    console.error(err);

    let err_message = new email_helper.Content("text/html", text)
    mailJSON = new email_helper.Mail(from_email, email_subject, to_email, err_message)
    // send email
    let reqBody = mailJSON.toJSON()
    let req = sg.emptyRequest()
    req.method = 'POST'
    req.path = '/v3/mail/send'
    req.body = reqBody
    sg.API(req, function (res) {
      console.log('res statusCOde ', res.statusCode)
      console.log('headers ', res.headers)
    })

    sendgrid.send({
      to: committer.email,
      from: 'hello@codesmith.io',
      subject: 'Hack Hour Error',
      html: text,
    });
  }
});

function postReportCard() {
  if (process.env.NODE_ENV === 'test') return;
  if (!TRAVIS_SECURE_ENV_VARS) {
    console.log('No secure env vars since this is not a merge. Not posting to Dynamo.');
    return;
  }

  const dynamodbDoc = require('./util/dynamodbDoc')(
    process.env.AWS_ACCESS_KEY_ID,
    process.env.AWS_SECRET_ACCESS_KEY
  );

  const params = {
    TableName: 'report-cards',
    Key: {
      github: committer.github,
    },
  }

  dynamodbDoc.get(params, (err, data) => {
    let results;
    if (err) {
      console.log(`Ran into an error searching dynamo for ${committer.github} in report-cards table`);
      return;
    }

    results = data.Item
      ? data.Item
      : {
          github: committer.github,
          name: committer.name,
          suites: {},
        };

    results.updated = new Date().toISOString();
    console.log('check', require(reportFile), 'check2', results, 'check3', results.suites)
    results.suites = Object.assign(results.suites, require(reportFile));
    results.count = Object.keys(results.suites).length;

    dynamodbDoc.put({ TableName: 'report-cards', Item: results }, (err) => {
      if (err) {
        console.log(`Couldn't add json file to dynamo: ${JSON.stringify(results)}` +
        ` in ${repo}. Error: ${err}`);
      }
    });
  });
}
