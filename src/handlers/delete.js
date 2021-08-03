const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

async function deletefunc(event, context, callback) {
  const reqBody = JSON.parse(event.body);
  // return {
  //   statusCode: 200,
  //   body: reqBody.id,
  // };

  const params = {
    Key: {
      id: reqBody.id
    },
    TableName: "s-ott-crud"
  };


  const result = await dynamoDb.get(params).promise();
  if(result.Item){
     return dynamoDb.delete(params).promise()
    .then(() =>
      callback(null, response(200, { message: 'Post deleted successfully',id:result }))
    )
    .catch((err) => callback(null, response(200, err)));
  }

   callback(null, response(200, { message: 'Does not exist',id:result }))

};


export const handler = deletefunc;
