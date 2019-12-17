 import * as ELEMENTS  from './elements.js';
 import {Http} from './http.js';
 import {WeatherData, WEATHER_PROXY_HANDLER} from './weather-data.js'


 ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather)


function searchWeather()  {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if(CITY_NAME.length == 0) {
        alert('Please enter city name!')
    }

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display ='block'
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display ='none'
    const APPID = "fbc51c2c6986ce60028529ee469fec01";
    const URL =`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&APPID=${APPID}` 
    Http.fetchData(URL).then((responseData) => {
        const description = responseData.weather[0].description.toUpperCase();
        const temperature = responseData.main.temp;
        const WEATHER_DATA = new WeatherData(CITY_NAME, description);
        const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER )
        WEATHER_PROXY.temperature = temperature;
        
        updateWeather(WEATHER_PROXY)
 
    }).catch((e) => {
        console.log(e)
    })

}

function updateWeather(weatherData) {
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display ='none'
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display ='block'
}