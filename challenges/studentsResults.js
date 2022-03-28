// Problem statement#
// Complete the following program to compute and return the female student’s results (name and average grade).
// Refactor it using functional programming. Execution results must stay the same.

const students = [
  {
    name: 'Anna',
    sex: 'f',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    sex: 'm',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    sex: 'f',
    grades: [5, 4, 2.5, 3],
  },
  {
    name: 'Brock',
    sex: 'm',
    grades: [4, 3, 2],
  },
];

// Expected output
[
  { name: 'Anna', sex: 'f', grades: 4 },
  { name: 'Martha', sex: 'f', grades: 3.625 },
];

// Solution
function studentResult(students) {
  //TODO: Compute and Return female students results using functional programming.
  const femaleStudent = (student) => student.sex == 'f';
  const avrageGade = (arr) =>
    (arr.grades = arr.grades.reduce((a, b) => a + b, 0) / arr.grades.length);
  const filter = (student, func) => student.filter(func);
  const result = filter(filter(students, femaleStudent), avrageGade);
  return result;
}

