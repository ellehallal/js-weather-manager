const fetch = require('node-fetch')

import { Weather } from '../src/weather';
import { APIRequest } from '../src/api_request';

jest.mock('../src/api_request')

describe('weather', () => {

  beforeEach(() => {
    APIRequest.mockClear();
  });


  it('can check if Weather called the API class constructor', () => {
    const weather = new Weather();
    expect(APIRequest).toHaveBeenCalledTimes(1);
  });

  it('checks for a new instance of APIRequest', () => {
    expect(APIRequest).not.toHaveBeenCalled();
  });


  describe('getOneDayWeather', () => {

    it('checks if getOneDayWeather calls the APIRequest method weatherOneDay', () => {
      const weather = new Weather();
      weather.getOneDayWeather();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherOneDay = mockAPIRequestInstance.weatherOneDay;
      expect(mockWeatherOneDay).toHaveBeenCalledTimes(1);
    });
  });


  describe('getDatesAndTimes', () => {

    it('returns an array of 16 dates and times as strings in an array', () => {
      const weather = new Weather();
      expect(weather.getDatesAndTimes().length).toEqual(16);
    });
  });


  describe('fourDayForecast', () => {
    it('checks if fourdayForecast calls the APIRequest method weatherFourDays()', () => {
      const weather = new Weather();
      weather.fourDayForecast();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherFourDays = mockAPIRequestInstance.weatherFourDays;
      expect(mockWeatherFourDays).toHaveBeenCalledTimes(1);
    });

  });

  describe('convertDayToDate', () => {
    it('converts the day as an integer to a string with the day name', () => {
      const weather = new Weather();
      expect(weather.convertDayToDate(6)).toEqual('Saturday');
    });
  });


  describe('convertZeroFormatTemperature', () => {
    it('converts -0 to 0', () => {
      const weather = new Weather();
      expect(weather.convertZeroFormatTemperature(-0)).toEqual('0°C');
    });
  });


  describe('removeDuplicates', () => {
    it('removes duplicate objects from an array, based on the specified key', () => {
      const weather = new Weather();
      let arr = [{id: 1}, {id: 1}, {id: 1}, {id: 2}]
      expect(weather.removeDuplicates(arr, 'id')).toEqual([{id: 1}, {id: 2}]);
    });
  });

});
