const weatherRequest = new XMLHttpRequest();
dcRequest.open("Get", "http://api.openweathermap.org/data/2.5/weather?id=4366164&units=imperial&appid=9e317db8a74c77f096f4971cbe5ef822", true);
dcRequest.responeType = "json";
dcRequest.send();
dcRequest.onload = function () {
   let dcData = JSON.parse(dcRequest.responseText);
   console.log(dcData);

   document.getElementById("dc").innerHTML = dcData.main.temp_max;

}
