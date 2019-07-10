

const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=62a1ef011397ca3b701c6e07cdb3cb67", true);
requestWeather.responeType = "json";
requestWeather.send();

requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
   console.log(weatherData);

   document.getElementById('weatherFive').innerHTML = weatherData.list[0].main.temp;
   document.getElementById('weatherFive1').innerHTML = weatherData.list[1].main.temp;
   document.getElementById('weatherFive2').innerHTML = weatherData.list[2].main.temp;
   document.getElementById('weatherFive3').innerHTML = weatherData.list[3].main.temp;
   document.getElementById('weatherFive4').innerHTML = weatherData.list[4].main.temp;


const iconcode = weatherData.list[0].weather[0].icon;
 const icon_path ="http://openweathermap.org/img/w/" + iconcode + ".png";
 document.getElementById('weather_icon').src = icon_path;

let iconcodes = weatherData.list[1].weather[0].icon;
let icon_paths ="http://openweathermap.org/img/w/" + iconcodes + ".png";
 document.getElementById('weather_icon1').src = icon_paths;

 let icons= weatherData.list[2].weather[0].icon;
let iconpath ="http://openweathermap.org/img/w/" + icons + ".png";
 document.getElementById('weather_icon2').src = iconpath;

 let icon= weatherData.list[3].weather[0].icon;
 let iconpaths ="http://openweathermap.org/img/w/" + icon + ".png";
  document.getElementById('weather_icon3').src = iconpaths;

  let theicons= weatherData.list[2].weather[0].icon;
  let theiconpath ="http://openweathermap.org/img/w/" + theicons + ".png";
   document.getElementById('weather_icon4').src = theiconpath;

 

 


}