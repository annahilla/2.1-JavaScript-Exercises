// Nivell 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1] + [...array2];

const suma = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    };
    return total;
};

// Nivell 2
const objecte1 = {
    propietat1: 1,
    propietat2: 2
};
const objecte2 = {...objecte1};
objecte2.propietat2 = 3;
console.log(objecte1);
console.log(objecte2);

const array4 = [1, 2, 3, 4, 5, 6, 7];
let [y, x, ...rest] = array4;