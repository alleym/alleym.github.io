var article = document.querySelector('selection');
let weatherRequest = new XMLHttpRequest();
let weatherRequest.open("GET", "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=7ed453f48c92067d0a65b95dfbaaaf65", true);

weatherRequest.send();
weatherRequest.onload = function() {
   let weatherData= JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById('current-temp').innerHTML = weatherData.main.temp;

}


    



