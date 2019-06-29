var section = document.querySelector('weathersummary');
const weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=23ce238bfc48a5932508ab3280bf491b", true);
weatherObject.send();
weatherObject.onload = function() {
	let infoWeather = JSON.parse(weatherObject.responseText);
console.log(infoWeather);
assembleData(inforWeather);
}
	


