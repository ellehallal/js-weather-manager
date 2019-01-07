require('dotenv').config()

export class Weather {

  async londonWeatherForOneDay() {
    const london = 'api.openweathermap.org/data/2.5/find?q=London&units=metric'
    const response = await fetch(london + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTemp = londonData.main.temp

    return londonTemp
  }

}
