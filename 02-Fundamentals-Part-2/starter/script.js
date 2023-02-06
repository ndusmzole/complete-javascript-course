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

 const f = ['sdd', 'sa', 'sdw', 'saeq'];
 const newLength = f.push("adad");

 console.log(newLength);
 console.log(f.includes('sa'));

 const ndu = {
   firstName: "Ndu",
   lastName: "Msomi",
   birthYear:  1997,
   calcAge: function(){
      return 2037 - this.birthYear;
   },
   job: 'QA',


   friends: ['name','nake', 'seda']
 };

 console.log(ndu.age);
 console.log(ndu['age']);
 ndu.age=26;
 console.log(ndu.age);
 ndu['age']=27;
 console.log(ndu['age']);



 //Challenge

 console.log(`${ndu.firstName} has ${ndu.friends.length} friends, and his best friend is called ${ndu.friends[2]}` );

 // Object methods call

 console.log("Ndu's age: ", ndu.calcAge());
 console.log("Ndu's age: ", ndu['calcAge']());
