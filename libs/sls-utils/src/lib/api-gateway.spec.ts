import { formatJSONResponse } from './http-helpers';

describe('formatJSONResponse(response: Record<string, any>)', () => {
  it('SHOULD format raw response payload as fully qualified API response', () => {
    expect(formatJSONResponse({ a: 1, b: 2, c: 3 })).toEqual({
      statusCode: 200,
      body: '{"a":1,"b":2,"c":3}',
    });
  });
});
