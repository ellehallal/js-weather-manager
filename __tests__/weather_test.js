const fetch = require('node-fetch')

import { Weather } from '../src/weather';
import { APIRequest } from '../src/api_request';

jest.mock('../src/api_request')

describe('weather', () => {

  let api;
  let weather;
  beforeEach(() => {
    APIRequest.mockClear();
    api = new APIRequest()
    weather = new Weather(api)
  });


  it('can check if Weather called the API class constructor', () => {
    expect(APIRequest).toHaveBeenCalledTimes(1);
  });

  describe('getOneDayWeather', () => {

    it('checks if getOneDayWeather calls the APIRequest method weatherOneDay', () => {
      weather.getOneDayWeather();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherOneDay = mockAPIRequestInstance.weatherOneDay;
      expect(mockWeatherOneDay).toHaveBeenCalledTimes(1);
    });
  });

  describe('getDatesAndTimes', () => {
    it('returns an array of 16 dates and times as strings in an array', () => {
      expect(weather.getDatesAndTimes().length).toEqual(24);
    });
  });

  describe('fourDayForecast', () => {
    it('checks if fourdayForecast calls the APIRequest method weatherFourDays()', () => {
      weather.fourDayForecast();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherFourDays = mockAPIRequestInstance.weatherFourDays;
      expect(mockWeatherFourDays).toHaveBeenCalledTimes(1);
    });
  });

  describe('convertDayToDate', () => {
    it('converts the day as an integer to a string with the day name', () => {
      expect(weather.convertDayToDate(6)).toEqual('Saturday');
    });
  });

  describe('formatTemperature', () => {
    it('converts -0 to 0', () => {
      expect(weather.formatTemperature(-0)).toEqual('0°C');
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicate objects from an array, based on the specified key', () => {
      let arr = [{id: 1}, {id: 1}, {id: 1}, {id: 2}]
      expect(weather.removeDuplicates(arr, 'id')).toEqual([{id: 1}, {id: 2}]);
    });
  });

  describe('httpToHttps()', () => {
    it('tests the weatherFourDays function', async () => {
      const url = 'http://hello.com/img.png';
      expect(weather.httpToHttps(url)).toEqual('https://hello.com/img.png')
    });
  });

});
