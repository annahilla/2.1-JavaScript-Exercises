// Nivell 1
const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
};

potConduir(18);
console.log(potConduir(18));

const numMesGran = (num1, num2) => {
    return num1 > num2 ? `${num1} és més gran que ${num2}` : `${num2} és més gran que ${num1}`;
};

numMesGran(45, 60);
console.log(numMesGran(45, 60));

// Nivell 2
const numPositiuNegatiu = (num) => {
    return num > 0 ? `${num} és un número positiu` : (num < 0 ? `${num} és un número negatiu` : `${num} és zero`);
};

numPositiuNegatiu(-4);
console.log(numPositiuNegatiu(-4));

const trobarMaxim = (a, b, c) => {
    return a > b
        ? (a > c ? `${a} és més gran que ${b} i ${c}` : `${c} és més gran que ${a} i ${b}`)
        : (b > c ? `${b} és més gran que ${a} i ${c}` : `${c} és més gran que ${a} i ${b}`);
};

trobarMaxim(3, -6, 32);
console.log(trobarMaxim(3, 6, 32));

// Nivell 3
const parOImpar  = (array) => {
    for (let i = 0; i < array.length ; i++) {
        let resultat = array[i] % 2 === 0 ? 'parell' : 'imparell';
        console.log(resultat);
    };
};

parOImpar([1, 2, 3, 4]);