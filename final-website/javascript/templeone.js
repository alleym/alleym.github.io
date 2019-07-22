const myRequestObject = new XMLHttpRequest();
const requestURL = "json/temple.json";
  

myRequestObject.open("GET", requestURL);
myRequestObject.responseType = "json";
myRequestObject.send();

myRequestObject.onload = function() {
       
var theEvents = myRequestObject.response;

document.getElementById("dc").innerHTML = theEvents.temples.name;
document.getElementById("dc").innerHTML = theEvents.temples.address;

document.getElementById("dc").innerHTML = theEvents.towns.telephone;
document.getElementById("dc").innerHTML = theEvents.towns.email;
document.getElementById("dc").innerHTML = theEvents.towns.history;
document.getElementById("dc").innerHTML = theEvents.towns.ordance;
   
    }
        