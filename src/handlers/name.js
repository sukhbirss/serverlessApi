async function name(event, context) {
  const now = new Date();
  const reqBody = JSON.parse(event.body);
  const auction = {
    status: 'OPEN',
    createdAt: now.toISOString(),
    reqBody,
  };

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = name;


