//create an object
var myRequestObject = new XMLHttpRequest();

//enter the path to the local json file
var myRequestURL = "towndata.json";

//Now we will create a global container called myWeatherInfo which can be used anywhere in the script.
let myWeatherInfo;
myRequestObject.open("GET", myRequestURL);
myRequestObject.send();
myRequestObject.onload = function() {
    myWeatherInfo = JSON.parse(myRequestObject.responseText);
    console.log(myWeatherInfo);
	
	//make a call to the function below for each town and send the array number of the needed town. Ppon returning insert it as html inside the id for each city
	document.getElementById("preston").innerHTML = assembleData(6);
	document.getElementById("fish").innerHTML = assembleData(5);
	document.getElementById("soda").innerHTML = assembleData(3);
}

function assembleData(x) {
	//make sure the town data is being loaded for the variale x
	console.log(myWeatherInfo.towns[x]);
	
	//Build the html as a javascript variable and include the html tags
	let townInfo = "<h2>"+myWeatherInfo.towns[x].name+"</h2>";
	townInfo += "<i>"+myWeatherInfo.towns[x].motto+"</i>";
	townInfo += "<p>Year founded: "+myWeatherInfo.towns[x].yearFounded+"</p>";
	townInfo += "<p>Current Population: "+myWeatherInfo.towns[x].currentPopulation+"</p>";
	townInfo += "<p>Rainfall: "+myWeatherInfo.towns[x].averageRainfall+"</p>";
         
	//return the variable that now has all the town information
	return townInfo;
}

//let townNames = jsonObj["towns"][1],["towns"][4],["towns"][5];
//console.log(townNames);