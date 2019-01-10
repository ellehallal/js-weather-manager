import { Weather } from '../src/weather';

const weather = new Weather()

async function displayTodayWeather() {
  const data = await weather.getOneDayWeather();

  const todayHeader = document.getElementById('today-header')
  const todayTemp = document.getElementById('today-temp')
  const todayDescription = document.getElementById('today-description')
  const todayMinTemp = document.getElementById('today-min-temp')
  const todayMaxTemp = document.getElementById('today-max-temp')
  const todayIcon = document.getElementById('today-icon')

  todayHeader.innerHTML = `Today in ${data.location}:`;
  todayTemp.innerHTML = data.temp;
  todayDescription.innerHTML = data.description;
  todayMaxTemp.innerHTML = data.maxtemp;
  todayMinTemp.innerHTML = data.mintemp;
  todayIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`
}

async function displayForecast() {
  const forecast = await weather.fourDayForecast();
  const displayForecast = document.getElementById('display-forecast')

  forecast.forEach((obj) => {
    let dayForecast = document.createElement("div");
    let dayForecastHeader = document.createElement("h3");
    dayForecast.classList.add("day-forecast");
    dayForecastHeader.innerHTML = `${obj.day} - ${obj.date}`
    dayForecast.appendChild(dayForecastHeader);

    let objectData = obj.data;
    console.log(obj.data)

    objectData.forEach((obj) => {
      let dayForecastData = document.createElement("div");
      dayForecastData.classList.add("day-forecast-data");

      let icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/w/${obj.icon}.png`;
      dayForecastData.appendChild(icon);

      let time = document.createElement("p");
      time.innerHTML = obj.time;
      dayForecastData.appendChild(time);

      let temp = document.createElement("p");
      temp.innerHTML = obj.temp;
      dayForecastData.appendChild(temp);

      let desc = document.createElement("p");
      desc.innerHTML = obj.description;
      dayForecastData.appendChild(desc);

      dayForecast.appendChild(dayForecastData);

    });
    displayForecast.appendChild(dayForecast);

  });
}

displayTodayWeather();
displayForecast();
