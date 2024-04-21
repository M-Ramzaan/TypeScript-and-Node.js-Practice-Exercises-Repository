"use strict";
console.log("Exercise No 43");
console.log(`43-Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
  `);
{
    let magicians = [
        "Magician Ramzan",
        "Magician Shehraz",
        "Magician Waqar",
    ];
    function make_great(magicians) {
        let great_magicians = [];
        for (let magician of magicians) {
            great_magicians.push("The great " + magician);
        }
        return great_magicians;
    }
    function show_magicians(magicians) {
        magicians.forEach((magician) => {
            console.log(magician);
        });
    }
    let great_magiciansNames = make_great([...magicians]);
    console.log("Original Magicians");
    show_magicians(magicians);
    console.log("The great Magicians");
    show_magicians(great_magiciansNames);
}
