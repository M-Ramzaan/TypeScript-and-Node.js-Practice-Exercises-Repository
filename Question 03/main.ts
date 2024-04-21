console.log("Exercise No 03");

console.log(
  "Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase."
);
{
  const firstName: string = "Muhammad Ramzan Akram";
  const myName: string = "MUHAMMAD RAMZAN";
  console.log("lowerCase = ", firstName.toLowerCase());
  console.log("upperCase = ", firstName.toUpperCase());
  console.log(
    "toTitleCase = ",
    myName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
  );
}
//In the above below things are used
//1 - Delimeters =Used to indicate start and end of regular expression pattern.
//2 - \b = word boundary indicates a word boundary.
//3 - \w = Indicates a position between a word chracter.
//4 - /g = global flag indicates that pattern applied globally across entire string.
