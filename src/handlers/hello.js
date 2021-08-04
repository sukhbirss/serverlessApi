
async function hello(event, context) {
  const now = new Date();
  const response = {
    status: 'hello from aws lambda',
    createdAt: now.toISOString(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}

export const handler = hello;


