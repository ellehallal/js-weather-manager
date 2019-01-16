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
  const backgroundImg = displayBackground(data.id);

  todayHeader.innerHTML = `Today in ${data.location}:`;
  todayTemp.innerHTML = data.temp;
  todayDescription.innerHTML = data.description;
  todayMaxTemp.innerHTML = data.maxtemp;
  todayMinTemp.innerHTML = data.mintemp;
  todayIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`;
  document.body.style.backgroundImage = backgroundImg

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
    dayForecastDate.classList.add('day-forecast-date');
    dayForecastDay.innerHTML = `${obj.day}`;
    dayForecastDate.innerHTML = `${obj.date}`;
    dayForecastHeader.appendChild(dayForecastDay);
    dayForecastHeader.appendChild(dayForecastDate);
    dayForecastHeader.appendChild(dayForecastHR);
    dayForecast.appendChild(dayForecastHeader);

    const dayForecastDataContainer = document.createElement('div');
    dayForecastDataContainer.classList.add('day-forecast-data-container');

    const objectData = obj.data;

    objectData.forEach((object) => {
      const dayForecastData = document.createElement('div');
      dayForecastData.classList.add('day-forecast-data');

      const time = document.createElement('p');
      time.classList.add('forecast-time');
      time.innerHTML = object.time;
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

      const hr = document.createElement('hr');
      dayForecastData.appendChild(hr);

      dayForecastDataContainer.appendChild(dayForecastData);
    });
    dayForecast.appendChild(dayForecastDataContainer);
    display4Forecast.appendChild(dayForecast);
  });
}

function displayBackground(id) {
  switch (true) {
    case (id < 300):
      return "url('./assets/Thunderstorm.jpg')";
      break;
    case (id < 400):
      return "url('./assets/Drizzle.jpg')";
      break;
    case (id >= 500 && id < 600):
      return "url('./assets/Rain.jpg')";
      break;
    case (id < 600):
      return "url('./assets/Snow.jpg')";
      break;
    case (id < 700):
      return "url('./assets/Atmosphere.jpg')";
      break;
    case (id === 800):
      return "url('./assets/Clear.jpg')";
      break;
    case (id > 800 && id < 900):
      return "url('./assets/Clouds.jpg')";
      break;
    default:
      return "url('./assets/Clear.jpg')";
      break;
  }
}

displayTodayWeather();
displayForecast();
