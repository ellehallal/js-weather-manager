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

  it('returns London temperature as a string', async () => {
    const londonWeather = await weather.getOneDayWeather();
    expect(londonWeather.temp).toContain('°C');
  });

  it('returns description of London weather as a string', async () => {
    const londonWeather = await weather.getOneDayWeather();
    expect(typeof londonWeather.description).toEqual('string');
  });

  it('returns London minimum temperature as a string', async () => {
    const londonWeather = await weather.getOneDayWeather();
    expect(londonWeather.mintemp).toContain('°C');
  });

  it('returns London maximum temperature as a string', async () => {
    const londonWeather = await weather.getOneDayWeather();
    expect(londonWeather.maxtemp).toContain('°C');
  });

  it('returns the location (London) string', async () => {
    const londonWeather = await weather.getOneDayWeather();
    expect(londonWeather.location).toContain('London');
  });

  it('returns an array of 16 dates and times as strings in an array', () => {
    expect(weather.getDatesAndTimes().length).toEqual(16);
  });

  it('gets 5 day data and returns the value of "cnt" ', async () => {
    const londonWeather5Days = await weather.weatherFiveDays();
    expect(londonWeather5Days.cnt).toEqual(40);
  });

  it('creates an array containing 16 objects', async () => {
    const data = await weather.getForecast();
    expect(data.length).toEqual(16);
  });

  it('returns the date for the first object in the array', async () => {
    const data = await weather.getForecast();
    expect(data[0].date).toContain('/');
  });

  it('returns the day for the first object in the array', async () => {
    const data = await weather.getForecast();
    expect(data[0].day).toContain('day');
  });

  it('returns the time for the first object in the array', async () => {
    const data = await weather.getForecast();
    expect(data[0].time).toContain(':');
  });

  it('returns the temp for the first object in the array', async () => {
    const data = await weather.getForecast();
    expect(data[0].temp).toContain('°C');
  });


});
