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
    const londonWeather = await weather.weatherOneDay();
    expect(typeof londonWeather[0]).toEqual('number');
  });

  it('returns description of London weather as a string', async () => {
    const londonWeather = await weather.weatherOneDay();
    expect(typeof londonWeather[1]).toEqual('string');
  });

  it('returns an array of 16 dates and times as strings in an array', () => {
    expect(weather.getDatesAndTimes().length).toEqual(16);
  });

  it('gets 5 day data and returns the value of "cnt" ', async () => {
    const londonWeather5Days = await weather.weatherFiveDays();
    expect(londonWeather5Days.cnt).toEqual(40);
  });

  it('returns requested date as a string', async () => {
    const data = await weather.getForecast();
    expect(data.length).toEqual(16);
  });







});
