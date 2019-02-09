# Weather Manager
- [Weather Manager](#weather-manager)
  - [What is Weather Manager?](#what-is-weather-manager)
  - [Preview](#preview)
  - [Application requirements:](#application-requirements)
  - [Additional Features](#additional-features)
  - [Install](#install)
  - [Testing](#testing)
      - [To run tests:](#to-run-tests)
  - [Features To Add](#features-to-add)

## What is Weather Manager?
- A responsive web application, which allows the user to view the weather forecast for five days.
- View Weather Manager on [Heroku](https://peaceful-ridge-32032.herokuapp.com/).

## Preview

![Weather Manager Preview](dist/assets/weather-manager-preview.gif)

## Application requirements:
- Get London's weather to display on a website using Open Weather Map: https://openweathermap.org/api
- Show London's five day forecast on the page
- Abstract away API call logic into it's own class
- Stub out API calls in tests
- Deploy to Heroku

## Additional Features
- Background image changes depending on the description of today's weather
- Displays high and low temperatures for the current day

## Install

Weather Manager can be viewed on [Heroku](https://peaceful-ridge-32032.herokuapp.com/). Alternatively, it can be run locally:

Note: You can download node and npm from [here](https://www.npmjs.com/get-npm), if not already installed.

```
git clone https://github.com/itsellej/js-weather-manager.git
cd js-weather-manager
```

You'll need an API key from [Open Weather Map](https://openweathermap.org/appid). Create an `.env` file in the root directory and add your key to it, e.g.: 
```
API_KEY=39880032123APIKEYetc
```

```
npm install
npm run build
npm start
```

Navigate to `http://localhost:8080` in your browser.

## Testing

The testing library used is [Jest](https://jestjs.io/). 

Note: mocks are in place for functions which initiate a request to the Open Weather Map API.

#### To run tests:

Type `npm run test` in the terminal.

## Features To Add
- Select a city from a list, and display the weather for it
- Have a user type in a city, and display the weather for it
- Display weather based on Geolocation API
