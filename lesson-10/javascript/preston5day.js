let section = document.querySelector('prestonFive');
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2993fd28d6743adbbe3af79713207ef5", true);
weatherRequest.responeType = "json";
weatherRequest.send();

weatherRequest.onload = function () {
   let weatherFive = JSON.parse(weatherRequest.responseText);
   console.log(weatherFive);

    document.getElementById('prestonFive') = weatherFive.weather.description;
}
