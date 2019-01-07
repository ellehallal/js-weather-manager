const fetch = require('node-fetch')
require('dotenv').config()

export class Weather {

  async londonWeatherForOneDay() {
    const london = 'https://api.openweathermap.org/data/2.5/find?q=London&units=metric'
    const response = await fetch(london + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTemp = londonData.list[0].main.temp;

    return londonTemp
  }

}
