import * as apiFunctions from "./modules/weather.js";
import * as updateDOM from "./modules/updateDOM";
import './styles/styles.scss';

//https://webpack.js.org/guides/production/
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }



const searchWeather = document.getElementById("searchWeather");
const form = document.getElementById("weatherMain");
const cityField = document.getElementById("citySearch");



searchWeather.addEventListener('click',async function(e) {
  e.preventDefault()
  const data = await apiFunctions.getWeather();
  console.log(data);
  updateDOM.updateCity(data);
});

cityField.addEventListener('keypress', async function (e) {
  
  if (e.key === 'Enter') {
    const data = await apiFunctions.getWeather();
    console.log(data);
    updateDOM.updateCity(data);
  }
});


form.addEventListener('submit', function (e) {
  e.preventDefault()
});



  

console.log("test3");
