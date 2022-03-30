$(document).ready(function(){
  $("#pesquisa").hide();
  const apiUrl = 'http://localhost:8080/usuarios/login/';
  const btnLogin = document.getElementById('submit');
  const urlRick = "https://rickandmortyapi.com/api/character/";
  const botao = document.getElementById("search");
  const nomes = [];
  btnLogin.addEventListener('click', registrar);
  botao.addEventListener("click", iniciarPesquisa);
  
  function randomToken(token){
    let hiddenToken = document.getElementById('userId');
    hiddenToken.value = token;
  }
  
  function limparPesquisa(){
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
  }
  
  function registrar(){
    let novoUsuario = {};
    novoUsuario.login = document.getElementById("login").value;
    novoUsuario.password = document.getElementById("password").value;
    limparPesquisa();
    acessarBack(novoUsuario);
  }
  
  async function acessarBack(_usuario){
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
          if(data.res === 'ok'){
            alert(`Bem-vindo(a) ${_usuario.login}!`);
            randomToken(data.token);
            $("#formFieldset").fadeOut('slow');
            $("#pesquisa").fadeIn('slow');
          }
          else{
            alert('Usuário ou senhas incorretos!');
          }
        })
      }
    )
  }

  async function pesquisaId(ms){
    return new Promise((resolve, reject) => {
      let id = document.getElementById("number").value;
      try{
        fetch(urlRick + id)
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Temos problemas: Código  ' +
                response.status);
              return;
            }
            // Escreve a resposta em uma tabela
            setTimeout(resolve, ms);
            response.json().then(function(data) {
              console.log(data);
              nomes.push(data.name);
              console.log(nomes);
            });
          }
        )
      }
      catch(error) {
        console.log("o erro " + error + " ocorreu!");
        reject(console.log("um erro ocorreu"));
      }
    
      finally{
        console.log("pesquisa por id completa! Começando pesquisa por nome"); 
      }
    })
    
  }
  
  async function pesquisaNome(){
    await pesquisaId(2000);
    try{
      let personagem = nomes.length - 1;
      if(personagem < 0){
        personagem = 0;
      }
      fetch(urlRick + "?name=" + nomes[personagem])
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
          });
        }
      )
    }
    catch(error) {
      console.log("o erro " + error + " ocorreu!");
    }
  
    finally{
      console.log("pesquisa por nome concluida!");
    }
  }

  async function iniciarPesquisa(){
    let token = document.getElementById("userId").value;
    console.log(token);
    fetch('http://localhost:8080/usuarios/token/' + token)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
          if(data.userToken === token){
            pesquisaNome();
            return true;
          }
          else{
            return alert("Token inválido!");
          }
        });
      }
    )
  }
})