export class Weather {
  constructor(api) {
    this.datesAndTimes = [];
    this.timeStamps = ['00:00:00', '06:00:00', '09:00:00', '12:00:00', '18:00:00', '21:00:00'];
    this.apiRequest = api;
  }

  getDatesAndTimes() {
    const oneDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const todayPlus1 = new Date(today.getTime() + (oneDay));
    const todayPlus2 = new Date(today.getTime() + (oneDay * 2));
    const todayPlus3 = new Date(today.getTime() + (oneDay * 3));
    const todayPlus4 = new Date(today.getTime() + (oneDay * 4));

    const nextFourDays = [todayPlus1, todayPlus2, todayPlus3, todayPlus4];
    const dateStrings = [];

    nextFourDays.forEach((date) => {
      const dateToString = JSON.stringify(date);
      dateStrings.push(dateToString.substring(1, 11));
    });

    dateStrings.forEach((date) => {
      this.timeStamps.forEach((time) => {
        this.datesAndTimes.push(`${date} ${time}`);
      });
    });
    return this.datesAndTimes;
  }

  formatTemperature(temperature) {
    let roundedTemp = Math.round(temperature);

    if (Object.is(roundedTemp, -0)) {
      roundedTemp = 0;
    }
    roundedTemp = `${roundedTemp}\xB0C`;
    return roundedTemp;
  }

  async getOneDayWeather() {
    const todayWeather = await this.apiRequest.weatherOneDay();
    todayWeather.temp = this.formatTemperature(todayWeather.temp);
    todayWeather.mintemp = this.formatTemperature(todayWeather.mintemp);
    todayWeather.maxtemp = this.formatTemperature(todayWeather.maxtemp);
    return todayWeather;
  }

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
      default:
        return 'Not a day';
    }
  }

  removeDuplicates(array, key) {
    const unique = array
      .map(e => e[key])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => array[e]).map(e => array[e]);
    return unique;
  }

  async fourDayForecast() {
    const timeStamps = this.getDatesAndTimes();
    const data = await this.apiRequest.weatherFourDays();

    const datalist = data.list;
    let forecastObject = [];

    datalist.forEach((date) => {
      timeStamps.forEach((timestamp) => {
        if (date.dt_txt === timestamp) {
          const dateTime = date.dt_txt.split(' ');
          const dateFormatted = dateTime[0].split('-');

          forecastObject.push({
            day: this.convertDayToDate(new Date(dateFormatted[0], dateFormatted[1] - 1, dateFormatted[2]).getDay()),
            date: `${dateFormatted[2]}/${dateFormatted[1]}/${dateFormatted[0]}`,
            dt: dateTime[0],
            data: [],
          });
        }
      });
    });
    forecastObject = this.removeDuplicates(forecastObject, 'date');

    datalist.forEach((item) => {
      forecastObject.forEach((object) => {
        const dateTime = item.dt_txt.split(' ');
        const timeFormatted = dateTime[1].split(':');

        if (dateTime[0] === object.dt && this.timeStamps.includes(dateTime[1])) {
          object.data.push({
            time: `${timeFormatted[0]}:${timeFormatted[1]}`,
            temp: this.formatTemperature(item.main.temp),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          });
        }
      });
    });
    return forecastObject;
  }
}
