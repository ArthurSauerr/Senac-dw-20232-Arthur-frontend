async function buscarTodosFabricantes(){
    fetch('http://localhost:8080/api/fabricantes')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
}

async function cadastrar(){
        const nome = document.getElementById("txtNome").value;
        const cnpj = document.getElementById("txtCnpj").value;
        const cep = document.getElementById("txtCep").value;
    
        if (!nome || !cnpj || !cep) {
            alert("Por favor, preencha os campos de Nome, CEP e CNPJ.");
            return; 
        }
    let options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nome : nome,
            cnpj : cnpj,
            cep : cep,
            cidade : document.getElementById("txtLocalidade").value,
            uf : document.getElementById("txtEstado").value
            
        })
    };
    fetch('http://localhost:8080/api/fabricantes', options)
    .then(resultado => resultado.json())
    .then(json => { 
        console.log(json);
    });
}


function preencherTabela(jsonFabricantes){
    var dadosTabelaFabricantes = document.getElementById('corpoTabela');

    for(let i = 0; i < jsonFabricantes.length; i++){
        let novaLinha = dadosTabelaFabricantes.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonFabricantes[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonFabricantes[i].nome;

        let celulaCnpj = novaLinha.insertCell();
        celulaCnpj.innerText = jsonFabricantes[i].cnpj

        let celulaCep = novaLinha.insertCell();
        celulaCep.innerText = jsonFabricantes[i].cep;

        let celulaCidade = novaLinha.insertCell();
        celulaCidade.innerText = jsonFabricantes[i].cidade;

        let celulaUf = novaLinha.insertCell();
        celulaUf.innerText = jsonFabricantes[i].uf;
    }
}

function limparTabela(){
    document.getElementById("corpoTabela").innerHTML = "";
}
