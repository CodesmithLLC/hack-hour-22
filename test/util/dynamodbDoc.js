const AWS = require("aws-sdk");

module.exports = (accessKeyId, secretAccessKey) => {
  var credentials = new AWS.Credentials(accessKeyId, secretAccessKey);

  AWS.config.update({
    credentials: credentials,
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
  });
  
  return new AWS.DynamoDB.DocumentClient();
};
