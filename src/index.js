import { Weather } from '../src/weather';

const weather = new Weather()

async function displayOneDay () {
  const todayTemp = document.getElementById('today-temp')
  const todayDescription = document.getElementById('today-description')
  const todayMinTemp = document.getElementById('today-min-temp')
  const todayMaxTemp = document.getElementById('today-max-temp')
  const todayIcon = document.getElementById('today-icon')
  const data = await weather.getOneDayWeather();

  todayTemp.innerHTML = data.temp;
  todayDescription.innerHTML = data.description;
  todayMaxTemp.innerHTML = `High: ${data.maxtemp}`;
  todayMinTemp.innerHTML = `Low: ${data.mintemp}`;
  todayIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`

}

async function displayForecast() {
  const forecast = await weather.getForecast();
  const displayForecast = document.getElementById('display-forecast')

  forecast.forEach((obj) => {
    let info = document.createElement("div")
    info.classList.add("entry")

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
