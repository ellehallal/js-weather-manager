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
    expect(typeof londonWeather[0]).toEqual('number');
  });

  it('returns description of London weather as a string', async () => {
    const londonWeather = await weather.londonWeatherForOneDay();
    expect(typeof londonWeather[1]).toEqual('string');
  });

  it('converts unix time, and formats it as a string', () => {
    expect(weather.convertDate(1546970400)).toEqual('2019-01-08');
  });
});
