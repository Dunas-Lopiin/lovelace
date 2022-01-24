const urlRamal = 'http://localhost:3000/usuarios/ramal'
const urlAni = 'http://localhost:3000/usuarios/aniversario?aniversario='
const urlSetor = 'http://localhost:3000/usuarios/setor?setor='

const tipoPesquisa = document.getElementById("drop-pesquisa");
const consulta = document.getElementById("pesquisar");
consulta.addEventListener('click', acessarBack);

function escreverTabela(item){
  let linha = document.createElement("tr");
  let nome = document.createElement("td");
  let matricula = document.createElement("td");
  let ramal = document.createElement("td");
  let email = document.createElement("td");
  let setor = document.createElement("td");
  let nascimento = document.createElement("td");
  matricula.innerHTML = item.Matricula;
  nome.innerHTML = item.Nome;
  email.innerHTML = item.Email;
  ramal.innerHTML = item.Ramal;
  setor.innerHTML = item.Setor;
  nascimento.innerHTML = item.Nascimento;
  linha.append(nome, matricula, ramal, email, setor, nascimento);
  document.getElementById("tabela").appendChild(linha);
}

function escreverTabelaRamal(item){
    let linha = document.createElement("tr");
    let nome = document.createElement("td");
    let ramal = document.createElement("td");
    nome.innerHTML = item[0];
    ramal.innerHTML = item[1];
    linha.append(nome, ramal);
    document.getElementById("tabela").appendChild(linha);
  }

  function limparTabelaRamal(){
    let elem = document.getElementById("tabela");
    elem.parentNode.removeChild(elem);
    let linha = document.createElement("tr");
    let tabela = document.createElement("table");
    tabela.id = "tabela";
    let nome = document.createElement("th");
    nome.innerHTML = "Nome";
    let ramal = document.createElement("th");
    ramal.innerHTML = "Ramal";
    linha.append(nome, ramal);
    document.getElementById("campo2").appendChild(tabela);
    document.getElementById("tabela").appendChild(linha);
  }

function limparTabela(){
  let elem = document.getElementById("tabela");
  elem.parentNode.removeChild(elem);
  let linha = document.createElement("tr");
  let tabela = document.createElement("table");
  tabela.id = "tabela";
  let nome = document.createElement("th");
  nome.innerHTML = "Nome";
  let matricula = document.createElement("th");
  matricula.innerHTML = "Matricula";
  let ramal = document.createElement("th");
  ramal.innerHTML = "Ramal";
  let email = document.createElement("th");
  email.innerHTML = "E-mail";
  let setor = document.createElement("th");
  setor.innerHTML = "Setor";
  let nascimento = document.createElement("th");
  nascimento.innerHTML = "Aniversário";
  linha.append(nome, matricula, ramal, email, setor, nascimento);
  document.getElementById("campo2").appendChild(tabela);
  document.getElementById("tabela").appendChild(linha);
}

function acessarBack(){
    let tipoDeConsulta = tipoPesquisa.value;
    let valorConsulta = document.getElementById("campo-pesquisa").value;
    console.log(valorConsulta);
    if(tipoDeConsulta === "ramal"){
        fetch(urlRamal)
        .then(
          function (response){
            if (response.status !== 200) {
              console.log('Temos problemas: Código  ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
              limparTabelaRamal();
              //JSON.parse(data);
              console.log(data);
              data.forEach(element => {
                escreverTabelaRamal(element);
              });
            })
          }
        )
    }
    else if(tipoDeConsulta === "aniversario"){
        fetch(urlAni + valorConsulta)
        .then(
          function (response){
            if (response.status !== 200) {
              console.log('Temos problemas: Código  ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
                limparTabela();
                console.log(data);
                data.forEach(element => {
                    console.log(element);
                escreverTabela(element);
              });
            })
          }
        )
    }
    else if(tipoDeConsulta === "setor"){
        fetch(urlSetor + valorConsulta)
        .then(
          function (response){
            if (response.status !== 200) {
              console.log('Temos problemas: Código  ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
                limparTabela();
                console.log(data);
                data.forEach(element => {
                    console.log(element);
                escreverTabela(element);
              });
            })
          }
        )
    }
}