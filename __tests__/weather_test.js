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

  it('returns an array of 5 dates as strings in an array', () => {
    console.log(weather.getDatesAndTimes())
    expect(weather.getDatesAndTimes().length).toEqual(16);
  });

  it('gets 5 day data and returns the value of "cnt" ', async () => {
    const londonWeather5Days = await weather.londonWeather5Days();
    expect(londonWeather5Days.cnt).toEqual(40);
  });





});
