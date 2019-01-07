require('dotenv').config()

export class Weather {

  async londonWeatherForOneDay() {
    const london = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk'
    const response = await fetch(london + '&appid=' + process.env.API_KEY);
    const londonData = await response.json();
    const londonTempKelvin = londonData.main.temp

    return londonTempKelvin
  }

}
