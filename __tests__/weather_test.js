import { Weather } from '../src/weather';

  describe('weather', () => {

    it('creates a new instance of Weather', () => {
      const weather = new Weather();
      expect(weather instanceof Weather).toEqual(true);
    });
  });
