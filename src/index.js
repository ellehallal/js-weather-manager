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
  const displayForecast = document.getElementById('display-forecast');

  forecast.forEach((obj) => {
    let dayForecast = document.createElement('div');
    let dayForecastHeader = document.createElement('div');
    let dayForecastDay = document.createElement('h3');
    let dayForecastDate = document.createElement('p');
    let dayForecastHR = document.createElement('hr');
    dayForecast.classList.add('day-forecast');
    dayForecastDay.innerHTML = `${obj.day}`;
    dayForecastDate.innerHTML = `${obj.date}`;
    dayForecastHeader.appendChild(dayForecastDay);
    dayForecastHeader.appendChild(dayForecastDate);
    dayForecastHeader.appendChild(dayForecastHR);
    dayForecast.appendChild(dayForecastHeader);

    let objectData = obj.data;

    objectData.forEach((obj) => {
      let dayForecastData = document.createElement('div');
      dayForecastData.classList.add('day-forecast-data');

      let time = document.createElement('p');
      time.classList.add('forecast-time')
      time.innerHTML = `Time: ${obj.time}`;
      dayForecastData.appendChild(time);


      let forecastIcon = document.createElement('div');
      forecastIcon.classList.add('forecast-icon');
      let icon = document.createElement('img');
      icon.src = `http://openweathermap.org/img/w/${obj.icon}.png`;
      forecastIcon.appendChild(icon);
      dayForecastData.appendChild(forecastIcon);

      let temp = document.createElement('p');
      temp.innerHTML = obj.temp;
      dayForecastData.appendChild(temp);

      let desc = document.createElement('p');
      desc.classList.add('forecast-description')
      desc.innerHTML = obj.description;
      dayForecastData.appendChild(desc);

      let forecastHR = document.createElement('hr');
      forecastHR.classList.add('forecast-hr');
      dayForecastData.appendChild(forecastHR);

      dayForecast.appendChild(dayForecastData);

    });
    displayForecast.appendChild(dayForecast);

  });
}

displayTodayWeather();
displayForecast();
