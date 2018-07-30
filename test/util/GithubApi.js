var request = require('request');

function GithubApi(options) {
  this.host = 'https://api.github.com';
  this.token = options.token;
  this.org = options.org;
}

GithubApi.prototype.commitInfo = function(options, next) {
  var org = options.org || this.org;
  if (!org) throw new Error('Need to provide org.');

  request.get({
    uri: `${this.host}/repos/${org}/${options.repo}/commits/${options.commit}?access_token=${this.token}`,
    headers: { 'user-agent': 'node.js' },
    followAllRedirects: true,
    json: true
  }, next);

};

GithubApi.prototype.pullInfo = function(options, next) {
  var org = options.org || this.org;
  if (!org) throw new Error('Need to provide org.');

  request.get({
    uri: `${this.host}/repos/${org}/${options.repo}/pulls/${options.pull}?access_token=${this.token}`,
    headers: { 'user-agent': 'node.js' },
    followAllRedirects: true,
    json: true
  }, next);

};

GithubApi.prototype.fileContents = function(options, next) {
  var org = options.org || this.org;
  if (!org) throw new Error('Need to provide org.');

  request.get({
      uri: `${this.host}/repos/${options.org}/assessments-archive/contents/${options.path}?access_token=${this.token}`,
      headers: { 'user-agent': 'node.js' },
      followAllRedirects: true,
      json: true
    }, next);

};

GithubApi.prototype.mergePullRequest = function(options, next) {
  var org = options.org || this.org;
  if (!org) throw new Error('Need to provide org.');
  console.log('TEMP log: host', this.host, 'org', org, 'token', this.token);
  request.put({
    uri: `${this.host}/repos/${org}/${options.repo}/pulls/${options.pull}/merge?access_token=${this.token}`,
    headers: { 'user-agent': 'node.js' },
    followAllRedirects: true,
    json: true,
    body: {
      commit_message: options.message || `Codesmith automatically merging pull request.`,
      sha: options.sha }
  }, next);

};

GithubApi.prototype.updatePullRequest = function(options, next) {
  var org = options.org || this.org;
  if (!org) throw new Error('Need to provide org.');

  request.patch({
    uri: `${this.host}/repos/${org}/${options.repo}/pulls/${options.pull}?access_token=${this.token}`,
    headers: { 'user-agent': 'node.js' },
    followAllRedirects: true,
    json: true,
    body: options.data
  }, next);

};

module.exports = GithubApi;