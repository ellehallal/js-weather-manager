const fetch = require('node-fetch');

export class APIRequest {
  async getWeatherData(callType) {
    const url = `https://api.openweathermap.org/data/2.5/${callType}?q=London,UK&units=metric`;

    try {
      const response = await fetch(`${url}&appid=${process.env.API_KEY}`);
      const data = await response.json();
      if (!data) return `${callType} not found`;
      return data;
    } catch (error) {
      return `${callType}: Unexpected error occurred`;
    }
  }

  async weatherOneDay() {
    const data = await this.getWeatherData('find');
    const formatData = this.formatOneDayData(data);
    return formatData;
  }

  async weatherFourDays() {
    const fourDayForecast = await this.getWeatherData('forecast');
    return fourDayForecast;
  }

  formatOneDayData(data) {
    return {
      temp: data.list[0].main.temp,
      description: data.list[0].weather[0].description,
      mintemp: data.list[0].main.temp_min,
      maxtemp: data.list[0].main.temp_max,
      location: data.list[0].name,
      icon: data.list[0].weather[0].icon,
      id: data.list[0].weather[0].id,
    };
  }
}
