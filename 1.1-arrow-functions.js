// Nivell 1
const add = (a, b) => {
    return a + b;
};

const randomNumber = () => Math.floor(Math.random() * 101);

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

// Nivell 3
setTimeout(() => {
    console.log('3 seconds have passed');
}, 3000);