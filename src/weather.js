const fetch = require('node-fetch')
require('dotenv').config()



export class Weather {

  async londonWeatherForOneDay() {
    const london = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric'
    const response = await fetch(london + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTemp = londonData.list[0].main.temp;
    const londonTempDescription = londonData.list[0].weather[0].description;
    const todayWeather = [londonTemp, londonTempDescription];

    return todayWeather
  }

  convertDate(unix_time){
    const date = new Date(unix_time * 1000);
    let day = date.getDate()
    let month = (date.getMonth() + 1)
    const year = date.getFullYear()

    if(day < 10){
      day = "0" + date.getDate()
    }
    if(month < 10){
      month = "0" + (date.getMonth() + 1)
    }

    return `${year}-${month}-${day}`

  }

}
