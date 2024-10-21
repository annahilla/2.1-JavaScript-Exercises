// Nivell 1
const processar = (a, callbackFunction) => {
    callbackFunction(a);
};

const suma = (a) => {
    console.log(a + 1);
}

processar(3, suma);

const calculadora = (num1, num2, callbackFunction) => {
    return callbackFunction(num1, num2);
};
calculadora(2, 3, (num1, num2) => num1 + num2);

console.log(calculadora(2, 3, (num1, num2) => num1 + num2));

// Nivell 2
const esperarISaludar  = (nom, callbackFunction) => {
    setTimeout(() => {
        callbackFunction(nom);
    }, 2000);
};

const saludar = (nom) => {
    console.log(`Hola ${nom}`);
}

esperarISaludar('Anna', saludar);

const processarElements = (array, callbackFunction) => {
    array.forEach(item => callbackFunction(item));
};

// Nivell 3
const processarCadena = (string, callbackFunction) => {
    const uppercaseString = string.toUpperCase();
    callbackFunction(uppercaseString);
};

processarCadena('gat', (string) => console.log(string));