const fetch = require('node-fetch')
require('dotenv').config()

export class APIRequest {

  async weatherOneDay() {
    const url = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric';
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const data = await response.json();
    return data;
  }

  async weatherFourDays() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric';
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const data = await response.json();
    return data;
  }

}
