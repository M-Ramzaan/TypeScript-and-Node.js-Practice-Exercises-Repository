"use strict";
console.log("Exercise No 36");
console.log(`36-T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.`);
function make_shirt(size, message) {
    return `A ${size} shirt printed with the ${message} on it.`;
}
// console.log(make_shirt(`Large`, `Learn code === Code Daily`));
console.log(make_shirt("large", "Hello, World!"));
