const urlNumero = 'http://localhost:3000/promise/'

function pesquisar(){
    const chamarBack = new Promise((resolve, reject) => {
        let numero = parseInt(Math.random() * (5 - 0) + 0);
        console.log(numero);
        if(numero > 3){
            setTimeout(() =>{
                reject("CONEXÃO REJEITADA POR TIMEOUT!");
            }, 3000)
        }
        else{
            fetch(urlNumero + numero*1000)
            .then(
                function (response){
                if (response.status !== 200) {
                    console.log('Temos problemas: Código  ' +
                    response.status);
                    return;
                }
                response.json().then(function(data) {
                    console.log(data);
                })
                }
            )
        }
    })

    chamarBack.then((resposta) => {
        console.log(resposta)
    }).catch((resposta) =>{
        console.log(resposta)
    })
    
}

const botao = document.getElementById("pesquisa");
botao.addEventListener("click", pesquisar);