
      function findWindChill() {    
          console.log('I am here inside the function');
        var speed = parseInt(document.getElementById('speed').textContent);    
        var high = parseInt(document.getElementById('high').textContent);    
        var low = parseInt(document.getElementById('low').textContent);    
        var aveTemp = (high+low) /2;
        console.log(aveTemp,speed);
        var windChill = windChillcal(aveTemp, speed); 
        //output for  the windchill function
            document.getElementById("output").innerHTML = windChill; 
        }

        //calculate the windchill using the windchill factor below and round to nearest 100
        function windChillcal(tempF, speed) {
            var W = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, 0.16) + .4275 * tempF * Math.pow(speed, 0.16);
        //round to two digits 
            W = Math.round(W);
 
        return W;        
        }

        findWindChill();