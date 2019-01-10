require('dotenv').config()
import { APIRequest } from '../src/api_request';

export class Weather {

  constructor(board) {
    this.datesAndTimes = []
    this.apiRequest = new APIRequest()
  }

  getDatesAndTimes() {
    const times = ['00:00:00', '06:00:00', '12:00:00', '18:00:00'];
    const oneDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const todayPlus1 = new Date(today.getTime() + (oneDay));
    const todayPlus2 = new Date(today.getTime() + (oneDay * 2));
    const todayPlus3 = new Date(today.getTime() + (oneDay * 3));
    const todayPlus4 = new Date(today.getTime() + (oneDay * 4));

    const nextFourDays = [todayPlus1, todayPlus2, todayPlus3, todayPlus4];
    let dateStrings = [];

    nextFourDays.forEach(function(date) {
      const dateToString = JSON.stringify(date)
      dateStrings.push(dateToString.substring(1, 11))
    });

    dateStrings.forEach((date) => {
      times.forEach((time) => {
        this.datesAndTimes.push(date + ' ' + time)
      })
    })
    return this.datesAndTimes
  };


  async getOneDayWeather(){
    const data = await this.apiRequest.weatherOneDay();
    let temp = Math.round(data.list[0].main.temp);
    const description = data.list[0].weather[0].description;
    let minTemp = Math.round(data.list[0].main.temp_min);
    let maxTemp = Math.round(data.list[0].main.temp_max);
    const location = data.list[0].name;
    const icon = data.list[0].weather[0].icon

    if(temp === -0){
      temp = 0
    }

    if(minTemp === -0){
      minTemp = 0
    }

    if(maxTemp === -0){
      maxTemp = 0
    }

    const todayWeather = {
      temp: `${temp}\xB0C`,
      description: description,
      mintemp: `${minTemp}\xB0C`,
      maxtemp: `${maxTemp}\xB0C`,
      location: location,
      icon: icon,
    };
    return todayWeather;
  }


  async getForecast(){
    const timeStamps = this.getDatesAndTimes();
    const data = await this.apiRequest.weatherFiveDays();

    const datalist = data.list;
    let result = [];

    datalist.forEach((date) => {
      timeStamps.forEach((timestamp) => {
        if(date.dt_txt === timestamp){
          let dateTime = date.dt_txt.split(' ');
          let dateFormatted = dateTime[0].split('-');
          let timeFormatted = dateTime[1].split(':');
          let day = "";
          let temp = Math.round(date.main.temp);

          switch (new Date(dateFormatted[0], dateFormatted[1] - 1, dateFormatted[2]).getDay()) {
            case 0:
            day = "Sunday";
            break;
            case 1:
            day = "Monday";
            break;
            case 2:
            day = "Tuesday";
            break;
            case 3:
            day = "Wednesday";
            break;
            case 4:
            day = "Thursday";
            break;
            case 5:
            day = "Friday";
            break;
            case 6:
            day = "Saturday";
          }

          if(temp === -0){
            temp = 0
          }

          result.push({
            day: day,
            date: `${dateFormatted[2]}/${dateFormatted[1]}/${dateFormatted[0]}`,
            time: `${timeFormatted[0]}:${timeFormatted[1]}`,
            temp: `${temp}\xB0C`,
            description: date.weather[0].description,
            icon: date.weather[0].icon,
          })
        }
      })
    })

    return result;
  }


}
