// Nivell 1
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

promise.then(result => {
    console.log(result);
});

const promiseWithReject = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve("Input correcte");
            } else {
                reject("Input incorrecte");
            }
        }, 2000);
    });
};

promiseWithReject("Hola");

const asyncFunction = async () => {
    const result = await promiseWithReject("Hola");
    console.log(result);
};

// Nivell 2
const asyncFunctionWithTryCatch = async () => {
    try {
        const result = await promiseWithReject("Hola");
        console.log(result);
    } catch(error) {
        console.log(error);
    };
};

// Nivell 3
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise solved after 2 seconds')
    }, 2000);
});

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise solved after 3 seconds')
    }, 3000);
});

Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
});