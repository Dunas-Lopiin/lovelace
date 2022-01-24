const apiUrl = 'http://localhost:3000/usuarios/adicionar/'
const btCadastro = document.getElementById("cadastro");
const formulario = [];
btCadastro.addEventListener('click', registrar);


function registrar(){
    let novoUsuario = {};
    novoUsuario.Nome = document.getElementById("nome").value;
    novoUsuario.Matricula = document.getElementById("matricula").value;
    novoUsuario.Ramal = document.getElementById("ramal").value;
    novoUsuario.Email = document.getElementById("email").value;
    novoUsuario.Setor = document.querySelector('input[name="setor"]:checked').value;
    novoUsuario.Nascimento = document.getElementById("nascimento").value;
    //console.log(formulario);
    acessarBack(novoUsuario);
}

function acessarBack(_usuario){
  //_usuario = JSON.stringify(_usuario);
    //console.log(_usuario);
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