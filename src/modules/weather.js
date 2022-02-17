async function getWeather() {
    
    try {
        const response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=938a422eddf6c0de9dd3c9cc0626c5e4', {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData);
        
    }

    catch (err)  {
        console.log(err);
    }
}

//then call asynchronous funciton with this.
getWeather();
