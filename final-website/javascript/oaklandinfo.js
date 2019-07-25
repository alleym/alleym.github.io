const weatherRequest = new XMLHttpRequest();
weatherRequest.open("Get", "https://alleym.github.io/final-website/json/temple.json", true);
weatherRequest.responeType = "json";
weatherRequest.send();
weatherRequest.onload = function () {
   let weatherData = JSON.parse(weatherRequest.responseText);
   console.log(weatherData);

   document.getElementById("templename").innerHTML = dc.name;

}
