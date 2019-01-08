import { Weather } from '../src/weather';

const weather = new Weather()

async function londonWeather() {
  const todayLondonWeatherTemp = document.getElementById('today-london-weather-temp')
  const todayLondonWeatherDescription = document.getElementById('today-london-weather-description')
  const data = await weather.londonWeatherForOneDay();
  todayLondonWeatherTemp.innerHTML = data[0] + '&deg;C';
  todayLondonWeatherDescription.innerHTML = data[1]
}

async function londonWeather5Day() {
  const london5daytemp = document.getElementById('london-5-day-temp')
  const london5daydescription = document.getElementById('london-5-day-description')
  const data = await weather.getForecast();
  london5daytemp.innerHTML = data[0]
  london5daydescription.innerHTML = data[1]
}

londonWeather()
londonWeather5Day()
