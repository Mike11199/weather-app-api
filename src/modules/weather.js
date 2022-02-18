//Wraps function in an IIFE (Immediately Invoked Function Expression).
//this is similar to a factory function

//include this import statement whenever using async syntax instead of regular promises
import regeneratorRuntime from "regenerator-runtime";

const weather = (() => {


async function getWeather(locationName) {
    
    try {
         //don't forget https:// or error.  had to change to https from http due to github pages being https and blocking api request if not also https
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + 
                                          '&APPID=938a422eddf6c0de9dd3c9cc0626c5e4', {mode: 'cors'}) 
                                          
        const weatherData = await response.json();
        console.log(weatherData);
        
    }

    catch (err)  {
        console.log(err);
    }
}

//IMPORTANT ADD THIS PART OR DOESN'T WORK FOR ALL FUNCTIONS ADDED
return { getWeather };



})();

export default weather;

