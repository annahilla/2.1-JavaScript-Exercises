// Nivell 1
const processar = (a, callbackFunction) => {
    callbackFunction(a);
};

const calculadora = (num1, num2, callbackFunction) => {
    return callbackFunction(num1, num2);
};
calculadora(2, 3, (num1, num2) => num1 + num2);

// Nivell 2
const esperarISaludar  = (nom, callbackFunction) => {
    setTimeout(() => {
        callbackFunction(nom);
    }, 2000);
};

const processarElements = (array, callbackFunction) => {
    array.forEach(item => callbackFunction(item));
};