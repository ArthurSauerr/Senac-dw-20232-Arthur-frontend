//CHAMADA DIRETO EM JAVASCRIPT
// let prompt = require('prompt-sync')();

// let cep = prompt('Digite seu CEP: ');


// buscarCEP(cep);

// async function buscarCEP(cep){
//     const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//     const json = await promiseConsultaCEP.json();

//     console.log(json);
// }

async function buscarCEP(cep){
    limpar();
    var txtCep = document.getElementById('txtCep');
    var cep = txtCep.value;

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await promiseConsultaCEP.json();

    if(json.erro == true){
        mostrarTelaDeErro();
    }else{
        preencherCamposJSON(json);
    }

    if(limpar){
        txtBairro.style = "color: black; font-weight: bold;";
        txtEstado.style = "color: black; font-weight: bold;";
        txtLocalidade.style = "color: black; font-weight: bold;";
        txtRua.style = "color: black; font-weight: bold;";
    }

    console.log(json);
}
function preencherCamposJSON(json){
    if(json.bairro){
        txtBairro.value = json.bairro;
    }else{
        txtBairro.disabled = false;
    }

    if(json.logradouro){
        txtRua.value = json.logradouro;
    }else{
        txtRua.disabled = false;
    }

    txtBairro.value = json.bairro;
    txtLocalidade.value = json.localidade;
    txtRua.value = json.logradouro;
    txtEstado.value = json.uf;
}

function mostrarTelaDeErro(){
    limpar();
    divCep.style = "background-color: red";
}

function limpar(){
    txtBairro.value = '';
    txtLocalidade.value = '';
    txtEstado.value = '';
    txtRua.value = '';

    txtBairro.disabled = true;
    txtLocalidade.disabled = true;
    txtEstado.disabled = true;
    txtRua.disabled = true;
}