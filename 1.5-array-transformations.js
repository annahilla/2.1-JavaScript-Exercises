// Nivell 1
const array1 = [1, 2, 3, 4];
const arraySquared = array1.map(num => Math.pow(num, 2));
console.log(arraySquared);

const arrayEvenNumbers = array1.filter(num => num % 2 === 0);
console.log(arrayEvenNumbers);

const array2 = [1, 10, 8, 11];
const firstNumberGreaterThanTen = array2.find(num => num > 10);
console.log(firstNumberGreaterThanTen);

const array3 = [13, 7, 8, 21];
const sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Nivell 2
const array4 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const arrayFunction = () => {
    return array4.filter(num => num >= 10).map(num => num * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
console.log(arrayFunction());

// Nivell 3
const array5 = [11, 12, 13, 14];
const isGreaterThanTen = (item) => item > 10;
console.log(array5.every(isGreaterThanTen));
console.log(array5.some(isGreaterThanTen));