const excluir = document.getElementById("bt-excluir");
excluir.addEventListener('click', excluirDoServidor)

function limparConsulta(){
  document.getElementById("excluir").value = "";
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
          alert("usuário excluido com sucesso!");
          limparConsulta();
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });     
  }
}