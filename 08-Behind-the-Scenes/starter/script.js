'use strict';

const calcAge = (year)=>{
    const age = 2030 - year;
    console.log(firstName);

    const printYear = function(){
        const output = `You are ${age} old and born in ${year}.`;
        console.log(output);
    }
    printYear();

    return age;

};

const firstName = "Nduduzo";
calcAge(1997);



// Hoisting

console.log(isMale); // var is hoisted to the value of undefined 
console.log(me); // not accessible, not hoisted - will produce an error because its still in Temporal Dead Zone (TDZ)
console.log(birthYear); // not accessible, not hoisted - will produce an error because its still in Temporal Dead Zone (TDZ)


let me = "my name";
const birthYear = 1997;
var isMale = true;
