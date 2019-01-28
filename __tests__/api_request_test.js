const fetch = require('node-fetch')

import { APIRequest } from '../src/api_request';

jest.mock("../src/api_request");

describe('APIRequest', () => {

  let apiRequest;
  beforeEach(() => {
    apiRequest = new APIRequest();
  });

  describe('getWeatherData()', () => {
    it('tests the getSearchResultData function', async () => {
      await apiRequest.getWeatherData('find');
      expect(apiRequest.getWeatherData).toHaveBeenCalled()
      expect(apiRequest.getWeatherData).toHaveBeenCalledTimes(1)
      expect(apiRequest.getWeatherData).toHaveBeenCalledWith('find')
    });

    it('tests the getSearchResultData function', async () => {
      await apiRequest.getWeatherData('forecast');
      expect(apiRequest.getWeatherData).toHaveBeenCalled()
      expect(apiRequest.getWeatherData).toHaveBeenCalledTimes(1)
      expect(apiRequest.getWeatherData).toHaveBeenCalledWith('forecast')
    });
  });

  describe('weatherOneDay()', () => {
    it('tests the weatherOneDay function', async () => {
      await apiRequest.weatherOneDay();
      expect(apiRequest.weatherOneDay).toHaveBeenCalled()
      expect(apiRequest.weatherOneDay).toHaveBeenCalledTimes(1)
    });
  });

  describe('weatherFourDays()', () => {
    it('tests the weatherFourDays function', async () => {
      await apiRequest.weatherFourDays();
      expect(apiRequest.weatherFourDays).toHaveBeenCalled()
      expect(apiRequest.weatherFourDays).toHaveBeenCalledTimes(1)
    });
  });
});
