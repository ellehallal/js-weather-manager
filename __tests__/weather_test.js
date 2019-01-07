import { Weather } from '../src/weather';

describe('weather', () => {

  let weather;
  beforeEach(() => {
    weather = new Weather();
  });

  it('creates a new instance of Weather', () => {
    expect(weather instanceof Weather).toEqual(true);
  });

  it('returns 5', async () => {
    const londonWeather = await weather.londonWeatherForOneDay();
    expect(londonWeather).toEqual(5);
  });
});
