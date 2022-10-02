import { formatJSONResponse } from '@watheia/bean-counter.sls-utils';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const greet = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.['name'] || 'World';
  return formatJSONResponse({
    message: `Hello, ${name}!`,
    event,
  });
};
