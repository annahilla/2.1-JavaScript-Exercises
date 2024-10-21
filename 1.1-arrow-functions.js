// Nivell 1
const add = (a, b) => {
    return a + b;
};

add(2, 3);
console.log(add(2, 3));

const randomNumber = () => Math.floor(Math.random() * 101);
randomNumber();
console.log(randomNumber());

class Person {
    constructor(name) {
        this.name = name;
    };

    greet = () => console.log(`Hola, ${this.name}`);
};

// Nivell 2
const printNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    };
};

printNumbers([1, 2, 3, 4]);

// Nivell 3
setTimeout(() => {
    console.log('3 seconds have passed');
}, 3000);