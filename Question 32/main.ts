console.log("Exercise No 32");
console.log(
  `32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
  • Make a list of five or more usernames called current_users.
  • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
  • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
  • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  
  `
);
{
  let current_users = ["John", "Hassan", "WAQAR", "Faisal", "kamran"];

  // Step 2: Define new users
  let new_users = ["JOHN", "yasir", "waqar", "junaid", "Kamran"];

  // Step 3 and 4: Loop through new_users and check availability
  for (let newUser of new_users) {
    // Convert newUser to lowercase for case-insensitive comparison
    let lowercaseNewUser = newUser.toLowerCase();
    // Check if lowercaseNewUser exists in current_users
    if (current_users.some((user) => user.toLowerCase() === lowercaseNewUser)) {
      console.log(`Sorry, the username '${newUser}' is not available.`);
    } else {
      console.log(`Congratulations, the username '${newUser}' is available.`);
    }
  }
}
