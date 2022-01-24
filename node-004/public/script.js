const tipoPesquisa = document.getElementById("dropPesquisa");
const consulta = document.getElementById("consulta");
const excluir = document.getElementById("bt-excluir");
let intervalo = false;
let timeOutId;
consulta.addEventListener('input', pesquisa);
excluir.addEventListener('click', excluirDoServidor)

function escreverTabela(item){
  let linha = document.createElement("tr");
  let id = document.createElement("td");
  let nome = document.createElement("td");
  let email = document.createElement("td");
  id.innerHTML = item.id;
  nome.innerHTML = item.nome;
  email.innerHTML = item.email;
  linha.append(id, nome, email);
  document.getElementById("tabela").appendChild(linha);
}

function limparTabela(){
  let elem = document.getElementById("tabela");
  elem.parentNode.removeChild(elem);
  let linha = document.createElement("tr");
  let tabela = document.createElement("table");
  tabela.id = "tabela";
  let id = document.createElement("th");
  id.innerHTML = "Id";
  let nome = document.createElement("th");
  nome.innerHTML = "Nome";
  let email = document.createElement("th");
  email.innerHTML = "E-mail";
  linha.append(id, nome, email);
  document.getElementById("campo2").appendChild(tabela);
  document.getElementById("tabela").appendChild(linha);
}

function escreverTabelaExcluir(item){
  let linha = document.createElement("tr");
  let id = document.createElement("td");
  let nome = document.createElement("td");
  let email = document.createElement("td");
  id.innerHTML = item.id;
  nome.innerHTML = item.nome;
  email.innerHTML = item.email;
  linha.append(id, nome, email);
  document.getElementById("tabela-excluir").appendChild(linha);
}

function limparTabelaExcluir(){
  let elem = document.getElementById("tabela-excluir");
  elem.parentNode.removeChild(elem);
  let linha = document.createElement("tr");
  let tabela = document.createElement("table");
  tabela.id = "tabela-excluir";
  let id = document.createElement("th");
  id.innerHTML = "Id";
  let nome = document.createElement("th");
  nome.innerHTML = "Nome";
  let email = document.createElement("th");
  email.innerHTML = "E-mail";
  linha.append(id, nome, email);
  document.getElementById("campo-excluir").appendChild(tabela);
  document.getElementById("tabela-excluir").appendChild(linha);
}

function contagem(){
  const tipoPesquisaAtual = tipoPesquisa.value;
  const consultaAtual = consulta.value;
  if(tipoPesquisaAtual === "id"){
    pesquisarNoServidor();
  }
  else if(consultaAtual.length >= 3){
    pesquisarNoServidor();
  }
  intervalo = false;
}

tipoPesquisa.addEventListener('change', (event) => {
  intervalo = false;
  consulta.value = "";
});

function pesquisa(){
  const tipoPesquisaAtual = tipoPesquisa.value;
  let consultaAtual = consulta.value;
  consultaAtual = consultaAtual.toString().trim();
  if(consultaAtual !== ""){
    if(consultaAtual.length < 3){
      if(tipoPesquisaAtual === "id"){
        if (!intervalo){
          pesquisarNoServidor();
          intervalo = true;
          setTimeout(contagem, 2000);
        }
      }
    }
    else if(consultaAtual.length >= 3){
      if(tipoPesquisaAtual === "nome"){
        if (!intervalo){
          pesquisarNoServidor();
          intervalo = true;
          setTimeout(contagem, 2000);
        }
      }
      else if(tipoPesquisaAtual === "id"){
        if (!intervalo){
          pesquisarNoServidor();
          intervalo = true;
          setTimeout(contagem, 2000);
        } 
      }
      else if(tipoPesquisaAtual === "email"){
        if (!intervalo){
          pesquisarNoServidor();
          intervalo = true;
          setTimeout(contagem, 2000);
        }
      }
    }
  }
}
function pesquisarNoServidor(){
  let tipoDeConsulta = document.getElementById("dropPesquisa").value;
  let consulta = document.getElementById("consulta").value;
  tipoDeConsulta = tipoDeConsulta.toString();
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/usuarios/' + tipoDeConsulta + '/' + consulta)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          limparTabela();
          data.forEach(element => {
            escreverTabela(element);
          });
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
};

function excluirDoServidor(){
  let tipoDeConsulta = document.getElementById("drop-excluir").value;
  let consulta = document.getElementById("excluir").value;
  tipoDeConsulta = tipoDeConsulta.toString();
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/usuarios/' + tipoDeConsulta + '/' + consulta)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          limparTabelaExcluir();
          data.forEach(element => {
            escreverTabelaExcluir(element);
          });
          setTimeout(confirmar , 2000);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
  
};

function confirmar(){
  if (confirm("Deseja mesmo excluir esse usuário?")) {
    excluirUsuario()
  } else {
    alert("Ação cancelada!");
  }
}

function excluirUsuario(){
  let tipoDeConsulta = document.getElementById("drop-excluir").value;
  let consulta = document.getElementById("excluir").value;
  tipoDeConsulta = tipoDeConsulta.toString();
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/usuarios/excluir/' + tipoDeConsulta + '?' + tipoDeConsulta + '=' + consulta,{
      method: 'DELETE'
    })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          console.log("foi");
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
}