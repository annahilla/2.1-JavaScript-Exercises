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