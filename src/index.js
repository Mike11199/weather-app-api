import weather from "./modules/weather.js";

const cityName = "Sacramento";

const data = weather.getWeather(cityName);

console.log(data.cityName);
console.log(data.temp);
console.log(data.humidity);
console.log(data.feelsLike);
console.log(data.visibility);
console.log(data.windSpeed);
console.log(data.windHeading);


console.log("test");