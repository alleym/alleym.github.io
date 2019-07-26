const cityINfo = new XMLHttpRequest();
cityINfo.open("Get", "temple.json", true);
cityINfo.responeType = "json";
cityINfo.send();
cityINfo.onload = function () {
   let cityData = JSON.parse(cityINfo.responseText);
   console.log(cityData);

   document.getElementById("templename").innerHTML = cityData.oakland.name;
   document.getElementById("address").innerHTML = cityData.oakland.address;
   document.getElementById("tele").innerHTML = cityData.oakland.telephone;
   document.getElementById("email").innerHTML = cityData.oakland.email;
   document.getElementById("temphistory").innerHTML = cityData.oakland.history;
   document.getElementById("ordinacne").innerHTML = cityData.oakland.ordiance;
   document.getElementById("session").innerHTML = cityData.oakland.session;



}
