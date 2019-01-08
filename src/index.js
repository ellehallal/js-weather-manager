import { Weather } from '../src/weather';

const weather = new Weather()

async function londonWeather() {
  const todayLondonWeatherTemp = document.getElementById('today-london-weather-temp')
  const todayLondonWeatherDescription = document.getElementById('today-london-weather-description')
  const data = await weather.londonWeatherForOneDay();
  todayLondonWeatherTemp.innerHTML = data[0] + '&deg;C';
  todayLondonWeatherDescription.innerHTML = data[1]
}

londonWeather()
