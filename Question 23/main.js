"use strict";
console.log("Exercise No 23");
console.log(`23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
  let car = 'subaru';
  console.log("Is car == 'subaru'? I predict True.")
  console.log(car == 'subaru')
  • Look closely at your results, and make sure you understand why each line evaluates to True or False.
  • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
  `);
let car = "subaru";
//Test 01
console.log(`Is car === "subaru"? I predict True.`);
console.log(car === "subaru");
//Test 02
console.log(`Is car !== "Toyota"? I predict True.`);
console.log(car !== "Toyota");
//Test 03
console.log(`Is car length > 5 ? I predict True.`);
console.log(car.length > 5);
//Test 04
console.log(`Is car start with "s"? I predict True.`);
console.log(car.startsWith("s"));
//Test 05
console.log(`Is car end at letter "u"? I predict True.`);
console.log(car.endsWith("u"));
//Test 06
console.log(`Is car === "honda"? I predict False.`);
console.log(car === "honda");
//Test 07
console.log(`Is car === "subaru"? I predict False.`);
console.log(car !== "subaru");
//Test 08
console.log(`Is car length > 6 ? I predict False.`);
console.log(car.length > 6);
//Test 09
console.log(`Does car contain "ford"? I predict False.`);
console.log(car.includes("ford"));
//Test 10
console.log(`Does car not start with "s"? I predict False.`);
console.log(!car.startsWith("s"));
