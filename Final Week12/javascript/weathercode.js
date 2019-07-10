//Where I want to put it
var article = document.querySelector('article');

//enter the path to the local json file
var myRequestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

//create an object
var myRequestObject = new XMLHttpRequest();



let myWeatherInfo;
myRequestObject.open("GET", myRequestURL);
myRequestObject.responseType = 'json';
myRequestObject.send();
myRequestObject.onload = function() {
    myWeatherInfo = myRequestObject.response;
	console.log(myWeatherInfo);
	assembleData(myWeatherInfo);
}
	
	
function assembleData(weatherinfo) {
	console.log(weatherinfo);

var towns= weatherinfo['towns'];
 
for (var i=0;i<towns.length;i++) {

	if (towns[i].name=="Preston"||towns[i].name=="Fish Haven"||towns[i].name=="Soda Springs") {

	
	var myAside = document.createElement('aside');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
	
	var myImage = document.createElement('img');

	myH2.textContent = towns[i].name+' '+towns[i].yearFounded;
    myPara1.textContent = 'Motto: ' +towns[i].motto;
    myPara2.textContent = 'Current Population: ' +towns[i].currentPopulation;
	myPara3.textContent = 'Rainfall:' +towns[i].averageRainfall;

	if (towns[i].name=="Preston") {
		myImage.setAttribute('src', 'images/preston.jpg');
		myImage.setAttribute('alt', 'Preston');
	}
	else if (towns[i].name=="Fish Haven") {
		myImage.setAttribute('src', 'images/fishhaven.jpg');
		myImage.setAttribute('alt', 'fish');
	}
	else if (towns[i].name=="Soda Springs") {
		myImage.setAttribute('src', 'images/sodasprings.jpg');
		myImage.setAttribute('alt', 'soda');
	}
	myAside.appendChild(myImage);
	myAside.appendChild(myH2);
	myAside.appendChild(myPara1);
	myAside.appendChild(myPara2);
	myAside.appendChild(myPara3);
	

	article.appendChild(myAside);
}
}
}

