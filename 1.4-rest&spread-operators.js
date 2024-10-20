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