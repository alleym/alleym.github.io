let section = document.querySelector('weathersummary');

let weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2993fd28d6743adbbe3af79713207ef5", true);
weatherRequest.responeType = "json";
weatherRequest.send();

weatherRequest.onload = function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById('maxTemp').innerHTML = weatherData.main.temp;
   document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
   document.getElementById('humidTemp').innerHTML = weatherData.main.humidity;

   
}
