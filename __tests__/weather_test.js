const fetch = require('node-fetch')

import { Weather } from '../src/weather';

describe('weather', () => {

  let weather;
  beforeEach(() => {
    weather = new Weather();
  });

  it('creates a new instance of Weather', () => {
    expect(weather instanceof Weather).toEqual(true);
  });

  it('returns London temperature as a number', async () => {
    const londonWeather = await weather.londonWeatherForOneDay();
    expect(typeof londonWeather).toEqual('number');
  });
});
