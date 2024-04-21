console.log("Exercise No 22");
console.log(
  `22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.`
);

//We use the same code from Question no 21
interface Student {
  name: string;
  age: number;
  grade: string;
}

const students: Student[] = [
  {
    name: "Muhammad Ramzan Akram",
    age: 33,
    grade: "11th",
  },
  {
    name: "Hassan Shehzad",
    age: 28,
    grade: "10th",
  },
  {
    name: "Shehraz",
    age: 27,
    grade: "09th",
  },
];

//Change an index in one of this programs to produce an index erro
//Change an index in one of this programs to produce an index erro
const studentsAtIndex1 = students[0];
const studentsAtIndex3 = students[3]; //It creates index error
console.log("Studnet at Index 01 = ", studentsAtIndex1);
console.log("Studnet at Index 03 = ", studentsAtIndex3);
