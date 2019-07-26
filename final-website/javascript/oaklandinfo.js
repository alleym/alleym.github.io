const cityINfo = new XMLHttpRequest();
cityINfo.open("Get", "temple.json", true);
cityINfo.responeType = "json";
cityINfo.send();
cityINfo.onload = function () {
   let cityData = JSON.parse(cityINfo.responseText);
   console.log(cityData);

   document.getElementById("templename").innerHTML = cityData.oakland.name;

}
