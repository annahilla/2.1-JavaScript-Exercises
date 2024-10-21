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