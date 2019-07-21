//Where I want to put it
var section = document.querySelector('theFour');

var myRequestObject = new XMLHttpRequest();

//enter the path to the local json file
var requestFile = "javascript/templejs.json";

//create an object
let theFourtemples;
myRequestObject.open("GET", requestFile);
myRequestObject.responseType = 'json';																																			
myRequestObject.send();
myRequestObject.onload = function() {
    theFourtemples = myRequestObject.response;
	console.log(theFourtemples);
	assembleData(theFourtemples);
}
	
	
function assembleData(templeinfo) {
	console.log(templeinfo);

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

