const fetch = require('node-fetch')
require('dotenv').config()

export class Weather {

  async londonWeatherForOneDay() {
    const london = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric'
    const response = await fetch(london + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTemp = londonData.list[0].main.temp;
    const londonTempDescription = londonData.list[0].weather[0].description;

    const todayWeather = [londonTemp, londonTempDescription]

    return todayWeather
  }

}
