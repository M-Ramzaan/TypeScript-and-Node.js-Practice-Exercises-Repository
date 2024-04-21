"use strict";
console.log("Exercise No 24");
console.log(`24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
  • Tests for equality and inequality with strings
  • Tests using the lower case function
  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  • Tests using "and" and "or" operators
  • Test whether an item is in a array
  • Test whether an item is not in a array  
  `);
//Tests for equality and inequality with strings
let string1 = "Muhammad Ramzan";
let string2 = "Akram";
console.log("Equality Test, String 1 === String 2 = ", string1 === string2); //false
console.log("Inequality Test, String 1 !== String 2 = ", string1 !== string2); //true
//Tests using the lower case function
let upperCaseString = "HELLO";
let lowerCaseString = "hello";
console.log("Lowercase test:", upperCaseString.toLowerCase() === lowerCaseString.toLowerCase()); // True
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let num1 = 5;
let num2 = 10;
//Tests for equality and inequality
console.log("Equality Test, Number 1 === Number 2 = ", num1 === num2); //false
console.log("Equality Test, Number 1 !== Number 2 = ", num1 !== num2); //true
//Tests for greater than and less than
console.log("Greater than test, Number 1 > Number 2 = ", num1 > num2); //false
console.log("Less than test, Number 1 < Number 2 = ", num1 < num2); //true
//Tests for greater than and equal to and less than and equal to
console.log("Greater than and equal to test, Number 1 >= Number 2 = ", num1 >= num2); //false
console.log("Less than and equal to test, Number 1 <= Number 2 = ", num1 <= num2); //true
//Tests using "and" and "or" operators
let number1 = 1;
let number2 = 2;
let number3 = 3;
//And operator test
console.log("And operator test = ", number1 > number2 && number2 > number3); //true
console.log("And operator test = ", number1 < number2 || number2 < number3); //false
//Test whether an item is in a array
let array1 = [1, 2, 3, 4, 5];
console.log("Test that item is an array = ", array1.includes(3)); //true
//Test whether an item is not in a array
console.log("Test that item is not an array = ", !array1.includes(6)); //true
