var section = document.querySelector('section');

const requestWeather = new XMLHttpRequest();
requestWeather.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5e326ad81821015729beb090b44212b5", true);
requestWeather.responeType = "json";
requestWeather.send();
requestWeather.onload = function () {
   let weatherData = JSON.parse(requestWeather.responseText);
   console.log(weatherData);

   function assembleData(weatherinfo) {
      console.log(weatherinfo);
   
   var weatherFeed= weatherinfo['weathersummary'];

   
   var myH2 = document.createElement('currentTemp');
   var myPara1 = document.createElement('highTemp');
   var myPara2 = document.createElement('humidity');
   var myPara3 = document.createElement('windChill');
   var myPara4 = document.createElement('windSpeed');



   myH2.textContent = weatherFeed[i].name+' ';
   myPara1.textContent = 'High: ' +towns[i].main.temp;
   myPara2.textContent = 'Humidity: ' +towns[i].main.humidity;
   myPara3.textContent = 'Windchill:' +towns[i].wind.deg;
   myPara4.textContent = 'Windspeed:' +towns[i].wind.speed;
   
 
}
}