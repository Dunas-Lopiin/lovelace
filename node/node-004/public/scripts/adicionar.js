const caminho = "http://localhost:3000/usuarios/adicionar"
const btAdicionar = document.getElementById("bt-adicionar");
btAdicionar.addEventListener('click', registrar);

function registrar(){
    let novoUsuario = {};
    novoUsuario.nome = document.getElementById("add-nome").value;
    novoUsuario.id = document.getElementById("add-id").value;
    novoUsuario.email = document.getElementById("add-email").value;
    acessarBack(novoUsuario);
}

function limparConsulta(){
  document.getElementById("add-nome").value = "";
  document.getElementById("add-id").value = "";
  document.getElementById("add-email").value = "";
}

function acessarBack(_usuario){
    fetch(caminho,{
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
        alert("Usuário adicionado com sucesso!");
        limparConsulta();
    })
    }
  )
}