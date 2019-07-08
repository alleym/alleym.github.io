

const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2325e15ff5ee3861cfcf63b8235e783d", true);
requestWeather.responeType = "json";
requestWeather.send();

requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
   console.log(weatherData);

   document.getElementById('weatherFive').innerHTML = weatherData.list[0].main.temp;
 
 


}