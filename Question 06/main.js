"use strict";
console.log("Exercise No 06");
console.log(`Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.`);
const myName = "               \n\tMuhammad Ramzan Akram\t\n";
console.log("nameWithWhiteSpace = ", myName);
//here above \n = add a new line and \t = tab add spaces
console.log("nameWithoutWhiteSpaces =", myName.trim());
