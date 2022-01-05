function escreverTotal(item){
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

function pesquisaId(){
    let id = document.getElementById("id").value;
    fetch('/usuarios/id/' + id)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        // Escreve a resposta em uma tabela
        response.json().then(function(data) {
          console.log(data);
          limparTabela();
          data.forEach(element => {
            escreverTotal(element);
          });
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function pesquisaNome(){
  let nome = document.getElementById("nome").value;
  fetch('/usuarios/nome/' + nome)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Temos problemas: Código  ' +
          response.status);
        return;
      }
      // Escreve a resposta em uma tabela
      nome = nome.toString();
      if(nome.length < 3){
        alert("Favor digitar um nome com 3 ou mais letras!");
      }
      else{
        response.json().then(function(data) {
          console.log(data);
          limparTabela();
          data.forEach(element => {
            escreverTotal(element);
          });
        });
      }
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function pesquisaEmail(){
  let email = document.getElementById("email").value;
  fetch('/usuarios/email/' + email)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Temos problemas: Código  ' +
          response.status);
        return;
      }
      // Escreve a resposta em uma tabela
      response.json().then(function(data) {
        console.log(data);
        limparTabela();
        data.forEach(element => {
          escreverTotal(element);
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
