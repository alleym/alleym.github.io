const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5e326ad81821015729beb090b44212b5", true);
requestWeather.responeType = "json";
requestWeather.send();

requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
   console.log(weatherData);
   


   
}

  


	