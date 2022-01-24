const apiUrl = 'http://localhost:3000/usuarios/adicionar/'
const btCadastro = document.getElementById("cadastro");
const formulario = [];
btCadastro.addEventListener('click', registrar);


function registrar(){
    let novoUsuario = {};
    let Nascimento = [];
    novoUsuario.Nome = document.getElementById("nome").value;
    novoUsuario.Matricula = document.getElementById("matricula").value;
    novoUsuario.Ramal = document.getElementById("ramal").value;
    novoUsuario.Email = document.getElementById("email").value;
    novoUsuario.Setor = document.querySelector('input[name="setor"]:checked').value;
    Nascimento.push(document.getElementById("nascimento").value);
    Nascimento = Nascimento[0].split('-');
    Nascimento = Nascimento.reverse();
    novoNascimento = Nascimento[0] + "/" + Nascimento[1] + "/" + Nascimento[2];
    novoUsuario.Nascimento = novoNascimento;
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