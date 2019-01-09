const fetch = require('node-fetch')

import { APIRequest } from '../src/api_request';

describe('APIRequest', () => {
  it('creates a new instance of APIRequest', () => {
    let apiRequest = new APIRequest();
    expect(apiRequest instanceof APIRequest).toEqual(true);
  });

});
