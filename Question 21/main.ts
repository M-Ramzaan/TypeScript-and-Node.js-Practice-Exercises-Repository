console.log("Exercise No 21");
console.log(
  `21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.`
);
interface Student {
  name: string;
  age: number;
  grade: string;
}

const student1: Student = {
  name: "Muhammad Ramzan Akram",
  age: 33,
  grade: "11th",
};

const student2: Student = {
  name: "Hassan Shehzad",
  age: 28,
  grade: "10th",
};

const student3: Student = {
  name: "Shehraz",
  age: 27,
  grade: "09th",
};

console.log(student1, student2, student3);
