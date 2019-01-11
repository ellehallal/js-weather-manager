const fetch = require('node-fetch')

import { APIRequest } from '../src/api_request';

describe('APIRequest', () => {

  let apiRequest;
  beforeEach(() => {
    apiRequest = new APIRequest();
  });

  it('creates a new instance of APIRequest', () => {
    expect(apiRequest).toBeInstanceOf(APIRequest);
  });

  it('gets 1 day data and returns the value "name" ', async () => {
    const weatherOneDay = await apiRequest.weatherOneDay();
    console.log(weatherOneDay)
    expect(weatherOneDay.location).toEqual('London');
  });

  it('gets 5 day data and returns the value of "cnt" ', async () => {
    const weatherFourDays = await apiRequest.weatherFourDays();
    expect(weatherFourDays.cnt).toEqual(40);
  });

});
