var article = document.querySelector('article');


const weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=23ce238bfc48a5932508ab3280bf491b", true);
weatherRequest.responeType = "json";
weatherRequest.send();
weatherRequest.onload = function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById('article').innerHTML = weatherData.main.temp;

}
