console.log("Exercise No 45");
console.log(
  `45-Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
  `
);
function store_car_info(
  manufacturer: string,
  model: string,
  ...options: [string[], any[]]
): object {
  let car_info: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  options.forEach((option) => {
    const [key, value] = option;
    car_info[key] = value;
  });

  return car_info;
}

let car_details = store_car_info(
  "Toyota",
  "Camry",
  ["Color", "Blue"],
  ["Year", 2020]
);

console.log(car_details);
