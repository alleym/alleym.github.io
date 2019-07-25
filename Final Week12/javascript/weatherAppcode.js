let section = document.querySelector('weathersummary');

let weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2e0c6365a9690870166df0060967442b", true);
weatherRequest.responeType = "json";
weatherRequest.send();

weatherRequest.onload = function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById('maxTemp').innerHTML = weatherData.main.temp;
   document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
   document.getElementById('humidTemp').innerHTML = weatherData.main.humidity;

}
