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
  // const london5daytemp = document.getElementById('london-5-day-temp')
  // const london5daydescription = document.getElementById('london-5-day-description')
  const data = await weather.getForecast();
  // london5daytemp.innerHTML = data[0].temp
  // london5daydescription.innerHTML = data[0].description
  return data
}

async function displayForecast() {
  const forecast = await londonWeather5Day()
  const displayForecast = document.getElementById('display-forecast')

  forecast.forEach((obj) => {
    let info = document.createElement("div")


    let dayp = document.createElement("p")
    dayp.innerHTML = obj.day
    info.appendChild(dayp);

    let timep = document.createElement("p")
    timep.innerHTML = obj.time
    info.appendChild(timep);


    let tempp = document.createElement("p")
    tempp.innerHTML = obj.temp
    info.appendChild(tempp);

    let descriptionp = document.createElement("p")
    descriptionp.innerHTML = obj.description
    info.appendChild(descriptionp)

    displayForecast.appendChild(info)

  })
}


londonWeather()
displayForecast()
