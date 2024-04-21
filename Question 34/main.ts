console.log("Exercise No 34");
console.log(
  `34-Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
  • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
  
  • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
  `
);

let favPizza: string[] = [
  "Afghani Tikaa",
  "Chicken Fajita",
  "Super Creamy Max",
];

for (let Pizza of favPizza) {
  console.log(`${Pizza}`);
}

for (let Pizza of favPizza) {
  console.log(`I like ${Pizza} Pizza so much.`);
}

console.log(
  `I like ${favPizza} Pizzas so much as these are my favorite pizzas. Whenever i go out for a shopping or on a picnic with my family. My first priority regarding dinner outside is Pizza. I always prefer Pizza Max "Super Creamy Max" pizza as this is their special flavour and so much yummy.cd`
);
