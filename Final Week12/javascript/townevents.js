const myRequestObject = new XMLHttpRequest();
const requestURL = "//github.com/alleym/alleym.github.io/blob/master/final-website/json/temple.json";
  

myRequestObject.open("GET", requestURL);
myRequestObject.responseType = "json";
myRequestObject.send();

myRequestObject.onload = function() {
       
var theEvents = myRequestObject.response;

document.getElementById("dc").innerHTML = theEvents.temples[1].name;
document.getElementById("fEvents").innerHTML = theEvents.towns[1].events;

document.getElementById("Preston").innerHTML = theEvents.towns[4].name;
document.getElementById("pEvents").innerHTML = theEvents.towns[4].events;
document.getElementById("sodaSprings").innerHTML = theEvents.towns[5].name;
document.getElementById("sEvents").innerHTML = theEvents.towns[5].events;
   
    }
        