"use strict";
console.log("Exercise No 31");
console.log(`31.	No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
  • If the list is empty, print the message We need to find some users!
  • Remove all of the usernames from your array, and make sure the correct message is printed.   
  `);
{
    let usernames = ["Ramzan", "Shehraz", "Hassan", "Admin", "Waqar"];
    usernames = [];
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
}
