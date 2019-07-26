const oaklandRequest = new XMLHttpRequest();
oaklandRequest.open("Get", "https://api.openweathermap.org/data/2.5/weather?id=5378538&units=imperial&appid=2e0c6365a9690870166df0060967442b", true);
oaklandRequest.responeType = "json";
oaklandRequest.send();
oaklandRequest.onload = function () {
   let oaklandData = JSON.parse(oaklandRequest.responseText);
   console.log(oaklandData);

   document.getElementById("oakland").innerHTML = oaklandData.main.temp_max;

}
