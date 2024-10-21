// Nivell 1
const array1 = [1, 2, 3, 4];
const arraySquared = array1.map(num => Math.pow(num, 2));

const arrayEvenNumbers = array1.filter(num => num % 2 === 0);

const array2 = [1, 10, 8, 11];
const firstNumberGreaterThanTen = array2.find(num => num > 10);

const array3 = [13, 7, 8, 21];
const sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Nivell 2
const array4 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const arrayFunction = () => {
    return array4.filter(num => num >= 10).map(num => num * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};