//include this import statement whenever using async syntax instead of regular promises
import regeneratorRuntime from "regenerator-runtime";


function updateCity(data) {
   

 
const cityNameOutput = document.getElementById("cityNameOutput");
cityNameOutput.innerHTML = data.name

const temp = document.getElementById("temp");
temp.innerHTML = data.main.temp

const humidity = document.getElementById("humidity");
humidity.innerHTML = data.main.humidity

const feelslike = document.getElementById("feelslike");
feelslike.innerHTML = data.main.feels_like

const visibility = document.getElementById("visibility");
visibility.innerHTML = data.main.visibility

const windspeed = document.getElementById("windspeed");
windspeed.innerHTML = data.main.wind.speed

const windheading = document.getElementById("windheading");
windheading.innerHTML = data.main.wind.deg

}




//IMPORTANT ADD THIS PART OR DOESN'T WORK FOR ALL FUNCTIONS ADDED
export {updateCity};

