import { Weather } from './weather';

const weather = new Weather();

async function displayTodayWeather() {
  const data = await weather.getOneDayWeather();

  const todayHeader = document.getElementById('today-header');
  const todayTemp = document.getElementById('today-temp');
  const todayDescription = document.getElementById('today-description');
  const todayMinTemp = document.getElementById('today-min-temp');
  const todayMaxTemp = document.getElementById('today-max-temp');
  const todayIcon = document.getElementById('today-icon');

  todayHeader.innerHTML = `Today in ${data.location}:`;
  todayTemp.innerHTML = data.temp;
  todayDescription.innerHTML = data.description;
  todayMaxTemp.innerHTML = data.maxtemp;
  todayMinTemp.innerHTML = data.mintemp;
  todayIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`;
}

async function displayForecast() {
  const forecast = await weather.fourDayForecast();
  const display4Forecast = document.getElementById('display-forecast');

  forecast.forEach((obj) => {
    const dayForecast = document.createElement('div');
    const dayForecastHeader = document.createElement('div');
    const dayForecastDay = document.createElement('h3');
    const dayForecastDate = document.createElement('p');
    const dayForecastHR = document.createElement('hr');

    dayForecast.classList.add('day-forecast');
    dayForecastHeader.classList.add('day-forecast-header');
    dayForecastDay.innerHTML = `${obj.day}`;
    dayForecastDate.innerHTML = `${obj.date}`;
    dayForecastHeader.appendChild(dayForecastDay);
    dayForecastHeader.appendChild(dayForecastDate);
    dayForecastHeader.appendChild(dayForecastHR);
    dayForecast.appendChild(dayForecastHeader);

    const objectData = obj.data;

    objectData.forEach((object) => {
      const dayForecastData = document.createElement('div');
      dayForecastData.classList.add('day-forecast-data');

      const time = document.createElement('p');
      time.classList.add('forecast-time');
      time.innerHTML = `Time: ${object.time}`;
      dayForecastData.appendChild(time);


      const forecastIcon = document.createElement('div');
      forecastIcon.classList.add('forecast-icon');
      const icon = document.createElement('img');
      icon.src = `http://openweathermap.org/img/w/${object.icon}.png`;
      forecastIcon.appendChild(icon);
      dayForecastData.appendChild(forecastIcon);

      const temp = document.createElement('p');
      temp.innerHTML = object.temp;
      dayForecastData.appendChild(temp);

      const desc = document.createElement('p');
      desc.classList.add('forecast-description');
      desc.innerHTML = object.description;
      dayForecastData.appendChild(desc);

      const forecastHR = document.createElement('hr');
      forecastHR.classList.add('forecast-hr');
      dayForecastData.appendChild(forecastHR);

      dayForecast.appendChild(dayForecastData);
    });
    display4Forecast.appendChild(dayForecast);
  });
}

displayTodayWeather();
displayForecast();
