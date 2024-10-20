// Nivell 1
const array1 = [1, 2, 3, 4];
const arraySquared = array1.map(num => Math.pow(num, 2));

const arrayEvenNumbers = array1.filter(num => num % 2 === 0);

const array2 = [1, 10, 8, 11];
const firstNumberGreaterThanTen = array2.find(num => num > 10);

const array3 = [13, 7, 8, 21];
const sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);