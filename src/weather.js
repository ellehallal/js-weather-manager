require('dotenv').config()
import { APIRequest } from '../src/api_request';

export class Weather {

  constructor(board) {
    this.datesAndTimes = [];
    this.timeStamps = ['00:00:00', '06:00:00', '12:00:00', '18:00:00'];
    this.apiRequest = new APIRequest();
  }

  getDatesAndTimes() {
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
      this.timeStamps.forEach((time) => {
        this.datesAndTimes.push(date + ' ' + time)
      })
    })
    return this.datesAndTimes
  };

  convertDayToDate(day) {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  }

  convertZeroTemperature(temperature) {
    if(temperature === -0){
      temperature = 0
    }
  }

  removeDuplicates(array, key) {
    const unique = array
      .map(e => e[key])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => array[e]).map(e => array[e]);
    return unique;
};


  async getOneDayWeather(){
    const data = await this.apiRequest.weatherOneDay();
    let temp = Math.round(data.list[0].main.temp);
    const description = data.list[0].weather[0].description;
    let minTemp = Math.round(data.list[0].main.temp_min);
    let maxTemp = Math.round(data.list[0].main.temp_max);
    const location = data.list[0].name;
    const icon = data.list[0].weather[0].icon

    this.convertZeroTemperature(temp);
    this.convertZeroTemperature(minTemp);
    this.convertZeroTemperature(maxTemp);


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

  async createForecastObject() {
    const timeStamps = this.getDatesAndTimes();
    const data = await this.apiRequest.weatherFiveDays();

    const datalist = data.list;
    let forecastObject = [];

    datalist.forEach((date) => {
      timeStamps.forEach((timestamp) => {
        if(date.dt_txt === timestamp){
          let dateTime = date.dt_txt.split(' ');
          let dateFormatted = dateTime[0].split('-');
          let timeFormatted = dateTime[1].split(':');
          let day = '';

          day = this.convertDayToDate(new Date(dateFormatted[0], dateFormatted[1] - 1, dateFormatted[2]).getDay());

          forecastObject.push({
            day: day,
            date: `${dateFormatted[2]}/${dateFormatted[1]}/${dateFormatted[0]}`,
            dt: dateTime[0],
            data: [],
          });
        }
      });
    });
    forecastObject = this.removeDuplicates(forecastObject, 'date');
    return forecastObject;
  }

  async getForecastData(obj){
    const data = await this.apiRequest.weatherFiveDays();
    const datalist = data.list;

    datalist.forEach((item) => {
      obj.forEach((obj) => {
        let dateTime = item.dt_txt.split(' ');
        let timeFormatted = dateTime[1].split(':');
        let temp = Math.round(item.main.temp);

        if(dateTime[0] === obj.dt && this.timeStamps.includes(dateTime[1])){
          this.convertZeroTemperature(temp);

          obj.data.push({
            time: `${timeFormatted[0]}:${timeFormatted[1]}`,
            temp: `${temp}\xB0C`,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          });
        }
      });
    });
    console.log(obj);
    return obj;
  }


  async fourDayForecast(){
    let object = await this.createForecastObject();
    let forecastData = await this.getForecastData(object);
    return forecastData;
  }
}
