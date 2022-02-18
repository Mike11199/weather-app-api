import * as apiFunctions from "./modules/weather.js";
import './styles/styles.scss';

//https://webpack.js.org/guides/production/
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }



const searchWeather = document.getElementById("searchWeather");


const cityName2 = "Sacramento";


searchWeather.addEventListener('click',async function(e) {

 
  const data = await apiFunctions.getWeather();

  console.log("The city looked up is " + data.name);
  console.log("The temperature is " + data.main.temp);
  console.log("The humidity is " + data.main.humidity);
  console.log("The actual temperature feels like " + data.main.feels_like);
  console.log("The visibility in feet is " + data.visibility);
  console.log("The wind speed is " + data.wind.speed);
  console.log("The wind heading in degrees is " + data.wind.deg);

});




 
  

console.log("test3");
