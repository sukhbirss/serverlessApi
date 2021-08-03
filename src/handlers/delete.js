const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

async function deletefunc(event, context, callback) {
  // const id = event.pathParameters.id;
  return {
    statusCode: statusCode,
    body: "id",
  };

  // const params = {
  //   Key: {
  //     id: id
  //   },
  //   TableName: "s-ott-crud"
  // };
  // return db.delete(params).promise()
  //   .then(() =>
  //     callback(null, response(200, { message: 'Post deleted successfully' }))
  //   )
  //   .catch((err) => callback(null, response(err.statusCode, err)));
};


export const handler = deletefunc;
