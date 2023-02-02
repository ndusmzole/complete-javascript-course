 'use strict';

 function fruitProcessor(apples, oranges){
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
 }

 console.log(fruitProcessor(12,23));


 // types of function declarations


 // function declaration

 function calcAge1(birthYear){
    return 2023 - birthYear;
 }



 // function expression

 const calcAge2 = function(birthYear){
    return 2023 - birthYear;
 }

 // Arrow function

 const calcAge3 = birthYear => 2023 - birthYear;

 console.log(calcAge1(1997), calcAge2(2001), calcAge3(2002));


 // 38. Coding challenge #1

 const calcAverage = (score1, score2, score3) => score1/3 + score2/3 + score3/3;


 function checkWinner(avgDolphins, avgKoalas){
   if(avgDolphins >= avgKoalas*2){
      console.log("Dolphins won!!", avgDolphins, avgKoalas);
   }else if(avgKoalas>=avgDolphins*2){
      console.log("Koalas won!!", avgDolphins, avgKoalas);
   }else{
      console.log("No winner!", avgDolphins, avgKoalas);

      
   }
 }

 const avgDolphins = calcAverage(8, 8, 8);
 const avgKoalas = calcAverage(4, 4, 4);

 checkWinner(avgDolphins,avgKoalas);