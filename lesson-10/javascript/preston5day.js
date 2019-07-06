const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=62a1ef011397ca3b701c6e07cdb3cb67", true);
requestWeather.responeType = "json";
requestWeather.send();
requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
   console.log(weatherData);
   
   document.getElementById('tableTemp') = weatherData.main.temp;

   const iconcode = weatherData.weather[0].icon;
  

   const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
   console.log(icon_path);

   document.getElementById(weather_icon).src = icon_path;

}

	