import { CityData } from '../src/cities';

describe('city data', () => {

  describe('getCityData()', () => {
    it('tests getCityData()', async () => {
      const data = new CityData();
      const cityData = data.getCityData('./dist/data/testdata.json');
      expect(cityData).toEqual({"hello": 33})
    });
  });



});
