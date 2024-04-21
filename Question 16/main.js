"use strict";
console.log("Exercise No 16");
console.log(`More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
  • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
  
  • Add one new guest to the beginning of your array.
  
  • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.`);
{
    let myGuests = ["Shehraz", "Hassan", "Junaid", "Waqar"];
    console.log(`Dear ${myGuests}, Good News! i found a bigger dinner table.Now we can invite our more friedns.`);
    myGuests.unshift("Kamran");
    myGuests.push("Faisal");
    myGuests.splice(Math.floor(myGuests.length / 2), 0, "Amir Raza");
    myGuests.forEach((guests) => console.log(`Dear ${guests}, you are invited for a dinner.`));
}
