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

console.log('=====================');
let prompt = require('prompt-sync')();

let curso = prompt('Qual nome do seu curso? ');
console.log('Curso: ' +curso);

let fase = Number(prompt('Informe a fase: '));
console.log(fase + 'a fase');

console.log('=====================');
let sol = true;
let vento = false;

if(sol == true && vento == false){
    console.log('Eu vou a praia');
}else{
    console.log('Não vou a praia');
}

console.log('=====================');
let tempo = prompt('Como está o tempo hoje?');
switch(tempo){
    case 'sol':{
        console.log('Vou a praia');
        break;
    }
    case 'nublado':{
        console.log('Vou ao cinema');
        break;
    }
    default: {
        console.log('Fico em casa');
    }
}

console.log('=====================');
let contador = 0;

while(contador < 10){
    if(contador % 2 == 0){
        console.log('Par: '+ contador);
    }else{
        console.log('Impar: '+contador);
    }
    contador++;
}