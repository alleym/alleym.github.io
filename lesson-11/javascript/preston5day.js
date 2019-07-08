

const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=62a1ef011397ca3b701c6e07cdb3cb67", true);
requestWeather.responeType = "json";
requestWeather.send();

requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
 

   document.getElementById('weatherFive').innerHTML = weatherData.list[0].main.temp;
   document.getElementById('weatherFive1').innerHTML = weatherData.list[1].main.temp;
   document.getElementById('weatherFive2').innerHTML = weatherData.list[2].main.temp;
   document.getElementById('weatherFive3').innerHTML = weatherData.list[3].main.temp;
   document.getElementById('weatherFive4').innerHTML = weatherData.list[4].main.temp;

   const iconcode = weatherData.list.weather[0].icon;
   console.log(iconcode);
   const icon_path = "http://openweathermap.org/img/w" + iconcode +".png";
   document.getElementById('weather_icon').src = icon_path;
 
 


}