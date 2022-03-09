const urlNumero = 'http://localhost:3000/promise/'

function pesquisar(){
    const chamarBack = new Promise((resolve, reject) => {
        let timer = parseInt((Math.random() * (5 - 0) + 0) * 1000);
        console.log(timer);
        if(timer > 3000){
            reject("CONEXÃO REJEITADA POR TIMEOUT!");
/*             setTimeout(() => {
                reject("CONEXÃO REJEITADA POR TIMEOUT!");
            }, 3000) */
        }
        else{
            fetch(urlNumero + timer)
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
    }).catch((erro) =>{
        console.log(erro)
    })
    
}

const botao = document.getElementById("pesquisa");
botao.addEventListener("click", pesquisar);