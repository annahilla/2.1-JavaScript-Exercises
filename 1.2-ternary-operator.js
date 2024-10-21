// Nivell 1
const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
};

const numMesGran = (num1, num2) => {
    return num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
};

// Nivell 2
const numPositiuNegatiu = (num) => {
    return num > 0 ? 'positiu' : (num < 0 ? 'negatiu' : 'zero');
};

const trobarMaxim = (a, b, c) => {
    return a > b
        ? (a > c ? a : c)
        : (b > c ? b : c);
};

// Nivell 3
const parOImpar  = (array) => {
    for (let i = 0; i < array.length ; i++) {
        let resultat = array[i] % 2 === 0 ? 'parell' : 'imparell';
        console.log(resultat);
    };
};