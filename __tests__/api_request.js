const fetch = require('node-fetch')

import { APIRequest } from '../src/api_request';

describe('APIRequest', () => {

  let apiRequest;
  beforeEach(() => {
    apiRequest = new APIRequest();
  });

  it('creates a new instance of APIRequest', () => {
    expect(apiRequest instanceof APIRequest).toEqual(true);
  });

  it('gets 1 day data and returns the value "name" ', async () => {
    const londonWeather1Day = await apiRequest.weatherOneDay();
    expect(londonWeather1Day.list[0].name).toEqual('London');
  });

  it('gets 5 day data and returns the value of "cnt" ', async () => {
    const londonWeather5Days = await apiRequest.weatherFiveDays();
    expect(londonWeather5Days.cnt).toEqual(40);
  });

});
