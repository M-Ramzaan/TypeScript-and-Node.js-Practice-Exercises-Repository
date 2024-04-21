console.log("Exercise No 38");
console.log(
  `38-Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
  `
);

function describe_city(city: string = "Karachi", country: string = "Pakistan") {
  return `${city} is in ${country}`;
}

console.log(describe_city());
console.log(describe_city("Lahore"));
console.log(describe_city("New York", "United States of America"));
