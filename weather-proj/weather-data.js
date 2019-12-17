export class WeatherData {
    constructor(cityName, description){
        this.cityName = cityName;
        this.description = description;
        this.temperature =''
    }
}

//create an object using this class
// wrap the object w/ proxy
//proxy whould have get/set method
// get set mehtod should transform temperture thats assigned to that class into Farnheit

export const WEATHER_PROXY_HANDLER = {
    get: function(target, property) {
        return Reflect.get(target, property)
    },  

    set: function(target, property, value) {
        const newValue = (value *1.8 +32).toFixed(2)+'F. ';
       
           return Reflect.set(target, property, newValue)
        
    }
}

