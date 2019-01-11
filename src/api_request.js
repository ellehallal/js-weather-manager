const fetch = require('node-fetch')
require('dotenv').config()

export class APIRequest {

  async getWeatherData(callType) {
    const url = `https://api.openweathermap.org/data/2.5/${callType}?q=London,UK&units=metric`;
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const data = await response.json();
    return data;
  }

  async weatherOneDay() {
    const data = await this.getWeatherData('find')
    const formatData = this.formatOneDayData(data)
    return formatData
  }

  async weatherFourDays() {
    return await this.getWeatherData('forecast')
  }

  formatOneDayData(data){
    return {
    temp: Math.round(data.list[0].main.temp),
    description: data.list[0].weather[0].description,
    mintemp: Math.round(data.list[0].main.temp_min),
    maxtemp: Math.round(data.list[0].main.temp_max),
    location: data.list[0].name,
    icon: data.list[0].weather[0].icon,
    }
  }

}
