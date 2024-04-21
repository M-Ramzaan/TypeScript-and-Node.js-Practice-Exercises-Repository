console.log("Exercise No 37");
console.log(
  `37-Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
  `
);
{
  function make_shirt(
    size: string = "Large",
    message: string = "I love Typescript"
  ): string {
    return `A ${size} shirt will be printed with a message ${message}.`;
  }
  //Large Shirt with message
  console.log(make_shirt());

  //Medium Shirt with message
  console.log(make_shirt("Medium"));

  //Small Shirt with message
  console.log(make_shirt("Small", "AI is a new future"));
}
