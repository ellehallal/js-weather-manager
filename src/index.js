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

    let icon = document.createElement("img")
    icon.src = `http://openweathermap.org/img/w/${obj.icon}.png`
    info.appendChild(icon)

    let day = document.createElement("p")
    day.innerHTML = obj.day
    info.appendChild(day);

    let date = document.createElement("p")
    date.innerHTML = obj.date
    info.appendChild(date);

    let time = document.createElement("p")
    time.innerHTML = obj.time
    info.appendChild(time);

    let temp = document.createElement("p")
    temp.innerHTML = obj.temp
    info.appendChild(temp);

    let desc = document.createElement("p")
    desc.innerHTML = obj.description
    info.appendChild(desc)

    displayForecast.appendChild(info)
  })
}


displayOneDay()
displayForecast()
