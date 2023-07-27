let carroA = {fabricante:'Ford', modelo:'Mustang', ano: 1969};
let carroB = {fabricante:'Porsche', modelo:'Macan', ano: 2023};
let carros = [carroA, carroB];

for(let carro of carros){
    console.log(carro);
}

console.log('---------------');
for(let propriedade in carroA){
    console.log(propriedade);
}

console.log('---------------');
for(let propriedade in carroB){
    console.log('Propriedade: ' +propriedade
                + ' - valor: ' +carroB[propriedade]);
}

console.log('---------------');
let nomes = ['Fred', 'Sheila', 'Sara'];
for(let nome of nomes){
    console.log(nome);
}

console.log('---------------');
for(let nome in nomes){
    console.log(nome);
}