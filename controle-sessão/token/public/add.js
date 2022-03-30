const apiUrl = 'http://localhost:8080/usuarios/adicionar/';
const apiUrlLogin = 'http://localhost:8080/usuarios/login/';
const btnAdd = document.getElementById('submit');
btnAdd.addEventListener('click', registrar);
let user;

function randomToken(){
    let hiddenToken = document.getElementById('userId');
    let token = Math.floor(Math.random() * (1000000 + 1) - 1);
    hiddenToken.value = token;
    console.log(token);
}

randomToken();

function limparPesquisa(){
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
  }

async function registrar(){
    let novoUsuario = {};
    novoUsuario.login = document.getElementById("login").value;
    novoUsuario.password = document.getElementById("password").value;
    limparPesquisa();
    adicionar(novoUsuario);
}

async function login(_usuario, ms){
    return new Promise((resolve, reject) => {
        try{
            fetch(apiUrlLogin,{
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
                setTimeout(resolve, ms);
                response.json().then(function(data) {
                    console.log(data);
                    if(data.posta === 'a'){
                        user = "ok";
                        console.log(user);
                        return true;
                    }
                })
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
    });
}

async function adicionar(_usuario){
    await login(_usuario, 1000);
    console.log('entrou');
    if(user === "ok"){
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
                    console.log(data);
                    changePage();
                })
            }
        )
    }
    else{
        alert('usuario já existente, tente novamente!');
    }
}

function changePage() {
    let text = "Você será redirecionado para a tela de login!";
    if (confirm(text) == true) {
        location.assign("index.html");
    } else {
      alert("cancelado!");
    }
    document.getElementById("demo").innerHTML = text;
  }