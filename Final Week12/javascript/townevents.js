const myRequestObject = new XMLHttpRequest();
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  

myRequestObject.open("GET", requestURL);
myRequestObject.responseType = "json";
myRequestObject.send();

myRequestObject.onload = function() {
       
var theEvents = myRequestObject.response;

document.getElementById("fishHaven").innerHTML = theEvents.towns[1].name;
document.getElementById("fEvents").innerHTML = theEvents.towns[1].events;

document.getElementById("Preston").innerHTML = theEvents.towns[4].name;
document.getElementById("pEvents").innerHTML = theEvents.towns[4].events;
document.getElementById("sodaSprings").innerHTML = theEvents.towns[5].name;
document.getElementById("sEvents").innerHTML = theEvents.towns[5].events;
   
    }
        