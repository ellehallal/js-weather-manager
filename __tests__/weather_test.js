const fetch = require('node-fetch')

import { Weather } from '../src/weather';
import { APIRequest } from '../src/api_request';

jest.mock('../src/api_request')

describe('weather', () => {

  // let weather;
  // beforeEach(() => {
  //   weather = new Weather();
  // });

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

    it('checks if getOneDayWeather calls the APIRequest method weatherOneDay', async () => {
      const weather = new Weather();
      weather.getOneDayWeather();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherOneDay = mockAPIRequestInstance.weatherOneDay;
      expect(mockWeatherOneDay).toHaveBeenCalledTimes(1);
    });

    // it('returns London temperature as a string', async () => {
    //   const londonWeather = await weather.getOneDayWeather();
    //   expect(londonWeather.temp).toContain('°C');
    // });
  //
  //   it('returns description of London weather as a string', async () => {
  //     const londonWeather = await weather.getOneDayWeather();
  //     expect(typeof londonWeather.description).toEqual('string');
  //   });
  //
  //   it('returns London minimum temperature as a string', async () => {
  //     const londonWeather = await weather.getOneDayWeather();
  //     expect(londonWeather.mintemp).toContain('°C');
  //   });
  //
  //   it('returns London maximum temperature as a string', async () => {
  //     const londonWeather = await weather.getOneDayWeather();
  //     expect(londonWeather.maxtemp).toContain('°C');
  //   });
  //
  //   it('returns the location (London) string', async () => {
  //     const londonWeather = await weather.getOneDayWeather();
  //     expect(londonWeather.location).toContain('London');
  //   });
  });
  //
  //
  // describe('getDatesAndTimes', () => {
  //
  //   it('returns an array of 16 dates and times as strings in an array', () => {
  //     expect(weather.getDatesAndTimes().length).toEqual(16);
  //   });
  // });
  //
  //
  describe('fourDayForecast', () => {
    it('checks if fourdayForecast calls the APIRequest method weatherFourDays()', async () => {
      const weather = new Weather();
      weather.fourDayForecast();
      const mockAPIRequestInstance = APIRequest.mock.instances[0];
      const mockWeatherOneDay = mockAPIRequestInstance.weatherFourDays;
      expect(mockWeatherOneDay).toHaveBeenCalledTimes(1);
    });
  //
  //   it('creates an array containing 4 objects', async () => {
  //     const data = await weather.fourDayForecast();
  //     expect(data.length).toEqual(4);
  //   });
  //
  //   it('returns the date for the first object in the array', async () => {
  //     const data = await weather.fourDayForecast();
  //     expect(data[0].date).toContain('/');
  //   });
  //
  //   it('returns the day for the first object in the array', async () => {
  //     const data = await weather.fourDayForecast();
  //     expect(data[0].day).toContain('day');
  //   });
  //
  //   it('returns the time for the first object in the array', async () => {
  //     const data = await weather.fourDayForecast();
  //     expect(data[0].data[0].time).toContain(':');
  //   });
  //
  //   it('returns the temp for the first object in the array', async () => {
  //     const data = await weather.fourDayForecast();
  //     expect(data[0].data[0].temp).toContain('°C');
  //   });
  });
  //
  //
  // describe('convertDayToDate', () => {
  //   it('converts the day as an integer to a string with the day name', () => {
  //     expect(weather.convertDayToDate(6)).toEqual('Saturday');
  //   });
  // });
  //
  //
  // describe('convertZeroFormatTemperature', () => {
  //   it('converts -0 to 0', () => {
  //     expect(weather.convertZeroFormatTemperature(-0)).toEqual('0°C');
  //   });
  // });
  //
  //
  // describe('removeDuplicates', () => {
  //   it('removes duplicate objects from an array, based on the specified key', () => {
  //     let arr = [{id: 1}, {id: 1}, {id: 1}, {id: 2}]
  //     expect(weather.removeDuplicates(arr, 'id')).toEqual([{id: 1}, {id: 2}]);
  //   });
  // });

});
