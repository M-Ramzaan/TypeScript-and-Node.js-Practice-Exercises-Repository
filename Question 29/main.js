"use strict";
console.log("Exercise No 29");
console.log(`29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
  • Make a array of your three favorite fruits and call it favorite_fruits.
  • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!    
  `);
let favoriteFruit = ["Orange", "Grapes", "Watermelon"];
if (favoriteFruit.includes("Orange")) {
    console.log("You really like Oranges!");
}
if (favoriteFruit.includes("Banana")) {
    console.log("You really like Bananas!");
}
if (favoriteFruit.includes("Grapes")) {
    console.log("You really like Grapes!");
}
if (favoriteFruit.includes("Strawberry")) {
    console.log("You really like Strawberry!");
}
if (favoriteFruit.includes("Watermelon")) {
    console.log("You really like Watermelon!");
}
