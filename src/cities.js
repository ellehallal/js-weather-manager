const fs = require('fs');

export class CityData {
  getCityData(file) {
    const filePath = file;
    const cityData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(cityData);
  }
}
