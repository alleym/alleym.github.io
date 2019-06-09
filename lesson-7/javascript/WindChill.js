<script type="text/javascript">

      function findWindChill() {


        // pull temp and windspeed from tables
        var tempF = parseInt(document.getElementById("WindChill").innerHTML);
        var speed = parseInt(document.getElementById("Wind").value).innerHTML;
        var W = windChill(tempF, speed);

        //output for  the windchill function
            document.getElementById("output").innerHTML = W + " Faherenheit"; 
        }

        //calculate the windchill using the windchill factor below and round to nearest 100
        function windChill(tempF, speed) {
            var W = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, 0.16) + .4275 * tempF * Math.pow(speed, 0.16);
        //round to two digits 
            W = Math.round(W);

        //return calculation back to the doINputOutpu function and let the answer print on the screen
        return W;
        
        }
        </script>

