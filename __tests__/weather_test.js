const fetch = require('node-fetch')

import { Weather } from '../src/weather';

describe('weather', () => {

  let weather;
  beforeEach(() => {
    weather = new Weather();
  });

  it('creates a new instance of Weather', () => {
    expect(weather).toBeInstanceOf(Weather);
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

  it('creates an array containing 4 objects', async () => {
    const data = await weather.fourDayForecast();
    expect(data.length).toEqual(4);
  });

  it('returns the date for the first object in the array', async () => {
    const data = await weather.fourDayForecast();
    expect(data[0].date).toContain('/');
  });

  it('returns the day for the first object in the array', async () => {
    const data = await weather.fourDayForecast();
    expect(data[0].day).toContain('day');
  });

  it('returns the time for the first object in the array', async () => {
    const data = await weather.fourDayForecast();
    expect(data[0].data[0].time).toContain(':');
  });

  it('returns the temp for the first object in the array', async () => {
    const data = await weather.fourDayForecast();
    expect(data[0].data[0].temp).toContain('°C');
  });

  describe('convertDayToDate', () => {
    it('converts the day as an integer to a string with the day name', () => {
      expect(weather.convertDayToDate(6)).toEqual('Saturday');
    });
  });

  describe('convertZeroTemperature', () => {
    it('converts -0 to 0', () => {
      expect(weather.convertZeroTemperature(-0)).toEqual(0);
    });
  });

});
