// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//coding challenge #1

const printForecast = function(temperature){
    let forecastSentence = "";

    if(!temperature.length){
        return "The forecast array is empty";
    }

   
    for(let i=0;i<temperature.length;i++){
        forecastSentence += `${temperature[i]}ºC in ${i+1} days ... `;
        
    }

    return forecastSentence;

}

console.log(printForecast([12, 5, -5, 0, 4]));