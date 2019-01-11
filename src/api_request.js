const fetch = require('node-fetch')
require('dotenv').config()

export class APIRequest {

  async getWeatherData(callType) {
    const url = `https://api.openweathermap.org/data/2.5/${callType}?q=London,UK&units=metric`;
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const data = await response.json();
    return data;
  }

  weatherOneDay() {
    return this.getWeatherData('find')
  }

  weatherFourDays() {
    return this.getWeatherData('forecast')
  }

}
