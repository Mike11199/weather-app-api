
//include this import statement whenever using async syntax instead of regular promises
import regeneratorRuntime from "regenerator-runtime";

//async function here with await keyword instead of regular promise format
async function getWeather() {
    

    const citySearch = document.getElementById("citySearch");
    const cityName = citySearch.value;

    try {
        //don't forget https:// or error.  had to change to https from http due to github pages being https and blocking api request if not also https
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + 
                                        '&units=imperial&APPID=938a422eddf6c0de9dd3c9cc0626c5e4', {mode: 'cors'}) 

        const weatherData = await response.json();
        // console.log(weatherData);

        console.log("The city looked up is " + weatherData.name);
        console.log("The temperature is " + weatherData.main.temp);
        console.log("The humidity is " + weatherData.main.humidity);
        console.log("The actual temperature feels like " + weatherData.main.feels_like);
        console.log("The visibility in feet is " + weatherData.visibility);
        console.log("The wind speed is " + weatherData.wind.speed);
        console.log("The wind heading in degrees is " + weatherData.wind.deg);


        return weatherData;
    }

    catch (err)  {
        console.log(err);
        alert(err);
    }





}


//IMPORTANT ADD THIS PART OR DOESN'T WORK FOR ALL FUNCTIONS ADDED
export {getWeather};

