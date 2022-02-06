const atualizar = document.getElementById("bt-modificar");
atualizar.addEventListener('click', tipoPesquisa);

function tipoPesquisa(){
    const pesquisa = document.getElementById("opcoes2").value;
    if(pesquisa === "atualizar"){
        atualizarDoServidor();
    }
    else if(pesquisa === "adicionar"){
        registrar();
    }
}

function limparConsulta(){
    document.getElementById("id2").value = "";
    document.getElementById("nome2").value = "";
}
function limparConsultaP(){
    document.getElementById("id").value = "";
}

function escreverTabela(item){
    let linha = document.createElement("tr");
    let id = document.createElement("td");
    let nome = document.createElement("td");
    id.innerHTML = item.id;
    nome.innerHTML = item.nome;
    linha.append(id, nome);
    document.getElementById("tabela2").appendChild(linha);
}

function limparTabela(){
  let elem = document.getElementById("tabela2");
  elem.parentNode.removeChild(elem);
  let linha = document.createElement("tr");
  let tabela = document.createElement("table");
  tabela.id = "tabela2";
  let id = document.createElement("th");
  id.innerHTML = "Id";
  let nome = document.createElement("th");
  nome.innerHTML = "Nome";
  linha.append(id, nome);
  document.getElementById("campo2").appendChild(tabela);
  document.getElementById("tabela2").appendChild(linha);
}

function registrar(){
    let novoUsuario = {};
    novoUsuario.nome = document.getElementById("nome2").value;
    novoUsuario.id = document.getElementById("id2").value;
    acessarBack(novoUsuario);
}

function atualizarDoServidor(){
  let consulta = document.getElementById("id2").value;

  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/produto/' + consulta)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
          limparTabela();
          data.forEach(element => {
            escreverTabela(element);
          });
          setTimeout(confirmarAtualizacao , 1000);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
  
};
function confirmarAtualizacao(){
  if (confirm("Deseja mesmo atualizar esse produto?")) {
    atualizacao();
  } else {
    alert("Ação cancelada!");
  }
}

function atualizacao(){
    let produtoAtualizado = {};
    produtoAtualizado.nome = document.getElementById("nome2").value;
    atualizarUsuario(produtoAtualizado);
}


function atualizarUsuario(_usuario){
  let consulta = document.getElementById("id2").value;
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/produto/' + consulta,{
      method: 'PUT',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(_usuario)
    })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
          if(!data){
            alert("produto inexistente!");
          }
          else if(data){
            alert("Produto atualizado com sucesso!");
            limparConsulta();
            pesquisarGeral("atualizar");
          }
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
}

function acessarBack(_usuario){
  const id = document.getElementById("id2").value;
    fetch('/produto/' + id,{
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(_usuario)
    })
  .then(
    function (response){
      if (response.status !== 200) {
        console.log('Temos problemas: Código  ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        alert("Produto adicionado com sucesso!");
        limparConsulta();
        pesquisarGeral("adicionar");
    })
    }
  )
}

const consultaExcluir = document.getElementById("bt-pesquisa");
let intervalo = false;
let timeOutId;
consultaExcluir.addEventListener('click', tipoPesquisaEx);

function tipoPesquisaEx(){
  const tipo = document.getElementById("opcoes").value;
  if(tipo === "pesquisar"){
    pesquisa();
  }
  else if(tipo === "excluir"){
    excluirDoServidor();
  }
}

function escreverTabelaPesquisa(item){
  let linha = document.createElement("tr");
  let id = document.createElement("td");
  let nome = document.createElement("td");
  id.innerHTML = item.id;
  nome.innerHTML = item.nome;
  linha.append(id, nome);
  document.getElementById("tabela").appendChild(linha);
}

function limparTabelaPesquisa(){
  let elem = document.getElementById("tabela");
  elem.parentNode.removeChild(elem);
  let linha = document.createElement("tr");
  let tabela = document.createElement("table");
  tabela.id = "tabela";
  let id = document.createElement("th");
  id.innerHTML = "Id";
  let nome = document.createElement("th");
  nome.innerHTML = "Nome";
  linha.append(id, nome);
  document.getElementById("campo").appendChild(tabela);
  document.getElementById("tabela").appendChild(linha);
}

function pesquisa(){
  let consultaAtual = document.getElementById("id").value;
  consultaAtual = consultaAtual.toString().trim();
  pesquisarNoServidor();
}
function pesquisarNoServidor(){
  let consulta = document.getElementById("id").value;
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/produto/' + consulta)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
            limparTabelaPesquisa();
          data.forEach(element => {
            escreverTabelaPesquisa(element);
          });
          limparConsultaP();
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
};

function excluirDoServidor(){
  let consulta = document.getElementById("id").value;

  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/produto/' + consulta)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
          limparTabelaPesquisa();
          data.forEach(element => {
            escreverTabelaPesquisa(element);
          });
          setTimeout(confirmar , 1000);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
  
};
function confirmar(){
  if (confirm("Deseja mesmo excluir esse produto?")) {
    excluirUsuario()
  } else {
    alert("Ação cancelada!");
  }
}

function excluirUsuario(){
  let consulta = document.getElementById("id").value;
  consulta = consulta.toString().trim();
  if(consulta != ""){
    fetch('/produto/' + consulta,{
      method: 'DELETE'
    })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
          if(!data){
            alert("produto inexistente!");
          }
          else if(data)
            alert("Produto excluido com sucesso!");
            limparConsultaP();
            pesquisarGeral("excluir");
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
}

function pesquisarGeral(tipo){
  fetch('/produto/all')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Temos problemas: Código  ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        if(tipo === "excluir"){
          limparTabelaPesquisa();
          data.forEach(element => {
            escreverTabelaPesquisa(element);
          });
          limparConsultaP();
        }
        else if(tipo === "adicionar" || tipo === "atualizar"){
          limparTabela();
          data.forEach(element => {
            escreverTabela(element);
          });
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
};