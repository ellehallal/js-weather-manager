import { Weather } from '../src/weather';

const weather = new Weather()

async function londonWeather() {
  const todayLondonWeather = document.getElementById('today-london-weather')
  const data = await weather.londonWeatherForOneDay();
  todayLondonWeather.innerHTML = data
}

londonWeather()
