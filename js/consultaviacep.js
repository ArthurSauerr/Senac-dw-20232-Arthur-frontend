let prompt = require('prompt-sync')();

let cep = prompt('Digite seu CEP: ');


buscarCEP(cep);

async function buscarCEP(cep){
    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await promiseConsultaCEP.json();

    console.log(json);
}