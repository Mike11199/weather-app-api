//Wraps function in an IIFE (Immediately Invoked Function Expression).
//this is similar to a factory function

//include this import statement whenever using async syntax instead of regular promises
import regeneratorRuntime from "regenerator-runtime";




//constructing a factory function here called 'weather' that contains two functions as methods
//factory functions do NOT require the 'new' keyword and use the arrow function expression
// another function of the object will be to return variables from that data




async function getWeather(locationName) {
    
    try {
        //don't forget https:// or error.  had to change to https from http due to github pages being https and blocking api request if not also https
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + 
                                        '&units=imperial&APPID=938a422eddf6c0de9dd3c9cc0626c5e4', {mode: 'cors'}) 

        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;
    }

    catch (err)  {
        console.log(err);
        alert(err);
    }

    
}

    //IMPORTANT ADD THIS PART OR DOESN'T WORK FOR ALL FUNCTIONS ADDED
   


export {getWeather};

