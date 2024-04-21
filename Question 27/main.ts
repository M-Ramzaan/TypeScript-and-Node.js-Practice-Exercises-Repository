console.log("Exercise No 27");
console.log(
  `27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
  • If the alien is green, print a message that the player earned 5 points.
  • If the alien is yellow, print a message that the player earned 10 points.
  • If the alien is red, print a message that the player earned 15 points.
  • Write three versions of this program, making sure each message is printed for the appropriate color alien
  `
);

//Alien Colors #3
{
  let alienColor01: string = "red";

  //Version that run the if section

  if (alienColor01 === "green") {
    console.log(
      "Congratulations! You earned 05 points for shooting the alien."
    );
  } else if (alienColor01 === "yellow") {
    console.log("Congratulations! You earned 10 points");
  } else if (alienColor01 === "red") {
    console.log("Congratulations! You earned 15 points");
  }
}
