
async function hello(event, context) {
  const now = new Date();
  const auction = {
    status: 'hello',
    createdAt: now.toISOString(),
  };

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = hello;


