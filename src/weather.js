const fetch = require('node-fetch')
require('dotenv').config()



export class Weather {

  async londonWeatherForOneDay() {
    const url = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric'
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTemp = londonData.list[0].main.temp;
    const londonTempDescription = londonData.list[0].weather[0].description;
    const todayWeather = [londonTemp, londonTempDescription];

    return todayWeather
  }

  async londonWeather5Days() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&'
    const response = await fetch(url + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    return londonData
  }

  getDatesAndTimes() {
    const times = ['00:00:00', '06:00:00', '12:00:00', '18:00:00']
    const oneDay = 1000 * 60 * 60 * 24
    const today = new Date();
    const todayPlus1 = new Date(today.getTime() + (oneDay));
    const todayPlus2 = new Date(today.getTime() + (oneDay * 2));
    const todayPlus3 = new Date(today.getTime() + (oneDay * 3));
    const todayPlus4 = new Date(today.getTime() + (oneDay * 4));

    const nextFiveDays = [todayPlus1, todayPlus2, todayPlus3, todayPlus4]
    let dateStrings = []

    nextFiveDays.forEach(function(date) {
      const dateToString = JSON.stringify(date)
      dateStrings.push(dateToString.substring(1, 11))
    });

    let datesAndTimes = []
    dateStrings.forEach((date) => {
      times.forEach((time) => {
        datesAndTimes.push(date + ' ' + time)
      })
    })

    return datesAndTimes

  }






}
