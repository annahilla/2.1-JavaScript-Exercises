// Nivell 1
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => {
    console.log(nom);
});

for (const nom of noms) {
    console.log(nom);
};

let numeros = [1, 2, 3, 4, 5, 6];
let numerosParells = numeros.filter(num => num % 2 === 0);
