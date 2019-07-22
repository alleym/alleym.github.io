//Where I want to put it
var section = document.querySelector('theFour');

var myRequestObject = new XMLHttpRequest();

//enter the path to the local json file
var requestFile = "json/temple.json";

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

var temples= templeinfo['temples'];
 
for (var i=0;i<temples.length;i++) {

	if (temples[i].name=="dc"||temples[i].name=="oakland"||temples[i].name=="slc"temples[i].name=="portland") {

	
	var myAside = document.createElement('aside');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
	var myPara4 = document.createElement('p');
	
	var myImage = document.createElement('img');

	myH2.textContent = temples[i].name;
    myPara1.textContent = 'Address: ' +temples[i].address;
    myPara2.textContent = 'Tel: ' +temples[i].telephone;
	myPara3.textContent = 'Email:' +temples[i].email;
	myPara4.textContent = 'Ordinances:' +temples[i].ordinance;
	myPara5.textContent = 'Sessions:' +temples[i].session;



	if (temples[i].name=="dc") {
		myImage.setAttribute('src', 'images/okc.jpg');
		myImage.setAttribute('alt', 'dc');
	}
   else if (temples[i].name=="oakland") {
		myImage.setAttribute('src', 'images/okc.jpg');
		myImage.setAttribute('alt', 'oakland');
	}
	else if (temples[i].name=="slc") {
		myImage.setAttribute('src', 'images/okc.jpg');
		myImage.setAttribute('alt', 'slc');
	}	
	
	else if (temples[i].name=="portland") {
		myImage.setAttribute('src', 'images/okc.jpg');
		myImage.setAttribute('alt', 'portland');
	}
	myAside.appendChild(myImage);
	myAside.appendChild(myH2);
	myAside.appendChild(myPara1);
	myAside.appendChild(myPara2);
	myAside.appendChild(myPara3);
	myAside.appendChild(myPara4);
	myAside.appendChild(myPara5);

	article.appendChild(myAside);
}
}
}

