"use strict";
console.log("Exercise No 42");
console.log(`42-Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
  `);
{
    let magicians = [
        "Magician Ramzan",
        "Magician Shehraz",
        "Magician Waqar",
    ];
    function show_magicians(magician) {
        magicians.forEach((magician) => {
            console.log(magician);
        });
    }
    function make_great(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] = "The Great " + magicians[i];
        }
    }
    make_great(magicians);
    show_magicians(magicians);
}
