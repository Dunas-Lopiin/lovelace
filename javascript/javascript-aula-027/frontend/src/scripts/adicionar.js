const apiUrl = 'http://localhost:3000/usuarios/adicionar/'
const btCadastro = document.getElementById("cadastro");
const formulario = [];
btCadastro.addEventListener('click', registrar);

function limparPesquisa(){
  document.getElementById("nome").value = "";
  document.getElementById("matricula").value = "";
  document.getElementById("ramal").value = "";
  document.getElementById("email").value = "";
  document.getElementById("drop-setor").value = "";
  document.getElementById("nascimento").value = "";
}

function registrar(){
    let novoUsuario = {};
    let Nascimento = [];
    novoUsuario.name = document.getElementById("nome").value;
    novoUsuario.id = document.getElementById("matricula").value;
    novoUsuario.extension = document.getElementById("ramal").value;
    novoUsuario.email = document.getElementById("email").value;
    novoUsuario.sector = document.getElementById("drop-setor").value;
    Nascimento.push(document.getElementById("nascimento").value);
    Nascimento = Nascimento[0].split('-');
    Nascimento = Nascimento.reverse();
    novoNascimento = Nascimento[0] + "-" + Nascimento[1] + "-" + Nascimento[2];
    novoUsuario.birthDay = novoNascimento;
    limparPesquisa();
    acessarBack(novoUsuario);
}

function acessarBack(_usuario){
    fetch(apiUrl,{
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
        console.log("foi");
    })
    }
  )
}