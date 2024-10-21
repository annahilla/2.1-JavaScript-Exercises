// Nivell 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

const suma = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    };
    return total;
};

suma(1, 2, 3);
console.log(suma(1, 2, 3));

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

console.log(y);
console.log(x);
console.log(rest);

// Nivell 3
const arrayFunction  = (a, b, c) => {
    console.log(a,b,c);
};
const array = [1, 2, 3];
arrayFunction(...array);

const objecte3 = {
    propietat1: 1,
    propietat2: 2
};

const objecte4 = {
    propietat3: 3,
    propietat4: 4
};

const objecte5 = {...objecte3, ...objecte4};
console.log(objecte5);