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

// Nivell 2
let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' };
for(const property in obj) {
    console.log(`${property} : ${obj[property]}`);
};

for(const num of numeros) {
    if(num === 5) {
       break; 
    };
    console.log(num);
};