const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function name(event, context) {
  const now = new Date();
  const reqBody = JSON.parse(event.body);

  const params = {
    TableName: process.env.POSTS_TABLE,
    Item: {
      uniqueId: uuid.v1(),
      objectType: "AUDIO",
      clientID: reqBody.clientID || "",
      name: reqBody.name || "",
      audioUrl: reqBody.audioUrl || "",
      audioImage: reqBody.audioImage || "",
      runtime: reqBody.runtime || "",
      bitRate: reqBody.bitRate || "",
    },
  };

  await dynamoDb.put(params).promise();

  const auction = {
    status: 'OPEN',
    createdAt: now.toISOString(),
    reqBody,
    params,
  };


  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = name;


