var article = document.querySelector('current-temp');

const weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=745e2114b5dd620dfae3029790e79f3d", true);
weatherRequest.responeType = "json";
weatherRequest.send();
weatherRequest.onload = function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById('current-temp').innerHTML = weatherData.main.temp;

}






