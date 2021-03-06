const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

async function name(event, context, callback) {
  const now = new Date();
  const reqBody = JSON.parse(event.body);

  const params = {
    TableName: "s-ott-crud",
    Item: {
      id: uuid.v1(),
      objectType: "AUDIO",
      clientID: reqBody.clientID || "",
      name: reqBody.name || "",
      audioUrl: reqBody.audioUrl || "",
      audioImage: reqBody.audioImage || "",
      runtime: reqBody.runtime || "",
      bitRate: reqBody.bitRate || "",
    },
  };

  const result = {
    status: 'success',
    createdAt: now.toISOString(),
    params,
  };
  return dynamoDb.put(params).promise()
  	.then(() => {callback(null,response(201,result))})
  	.catch(err => callback(null,response(err.statusCode,err)));

}

export const handler = name;


