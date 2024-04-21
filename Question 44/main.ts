console.log("Exercise No 44");
console.log(
  `44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
  `
);

function make_sandwich(...items: string[]): void {
  console.log(`Making a sandwich with ${items.join(",")}`);
}

make_sandwich("ham", "cheese.");
make_sandwich("Chicken tikka", "tomato.");
make_sandwich("mayo", "mustard.");
