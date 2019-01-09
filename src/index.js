import { Weather } from '../src/weather';

const weather = new Weather()

async function displayOneDay () {
  const todayLondonWeatherTemp = document.getElementById('today-london-weather-temp')
  const todayLondonWeatherDescription = document.getElementById('today-london-weather-description')
  const data = await weather.getOneDayWeather();
  todayLondonWeatherTemp.innerHTML = data.temp;
  todayLondonWeatherDescription.innerHTML = data.description;
}


async function displayForecast() {
  const forecast = await weather.getForecast();
  const displayForecast = document.getElementById('display-forecast')

  forecast.forEach((obj) => {
    let info = document.createElement("div")

    let dayp = document.createElement("p")
    dayp.innerHTML = obj.day
    info.appendChild(dayp);

    let datep = document.createElement("p")
    datep.innerHTML = obj.date
    info.appendChild(datep);

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


displayOneDay()
displayForecast()
