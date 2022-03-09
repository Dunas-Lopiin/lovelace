function forDate(){
    let myDate;
    for(let i = 0; i < 5000000; i++) {
        let date = new Date();
        myDate = date
    }

  return myDate;
}

const dataLoop = new Promise((resolve, reject) => {
   setTimeout(() =>{
    try {
        console.log("testando promise");
        resolve(forDate())
    } catch (e) {
        console.log("promise rejeitada por causa do erro: " + e);
        reject(e);
    }
   }, 2000)
})

dataLoop
    .then((resposta) =>  console.log("tudo certo"))
    .catch((erro) => console.log("temos um problema: " + erro))

    dataLoop
    .then(resposta => { console.log(resposta) }, erro => { console.log("esse erro " + erro) })


/* Promise reject */
 function funcaoX(a){
    if(1 + a === 3){
        y();
    }
    else if(1 + a !== 2){
        y();
    }
}

const soma = new Promise((resolve, reject) => {
    setTimeout(() => {

        try {
            console.log("testando promise");
            resolve(funcaoX())
        } catch (e) {
            console.log("promise rejeitada por causa do erro: " + e);
            reject(e);
        }
    }, 3000);
})

soma
    .then(() => console.log("sucesso!"))
    .catch((erro) => console.log("temos um problema: " + erro))

    soma
    .then(resposta => { console.log(resposta) }, erro => { console.log(erro) })

     

    
/* Promise resolve */
function funcaoY(){
    if(1 + 1 === 2){
        return "1+1 é igual a 2!";
    }
    else{
        return "1+1 não é igual a 2!";
    }
}

const comparacao = new Promise((resolve, reject) => {
    setTimeout(() => {

        try {
            console.log("testando promise");
            resolve(funcaoY())
        } catch (e) {
            console.log("promise rejeitada por causa do erro: " + e);
            reject(e);
        }
    }, 2000);
})

comparacao
    .then((resposta) =>  console.log("resposta aceita"))
    .catch((erro) => console.log("temos um problema: " + erro))

    comparacao
    .then(resposta => { console.log(resposta) }, erro => { console.log("esse erro " + erro) })



/* É par e primo */
function isEvenOrPrime(num){
    let start = 2;
    const limit = Math.sqrt(num);
    if(num <= 0 || Number.isInteger(num) === false){
        return error;
    }
    else if(num % 2 == 0){
        while (start <= limit) {
            if (num % start++ < 1){
                return "numero inicial menor que 2";
            }
        }
        return "Sucesso";
    }
    else{
        return false;
    }
}
 
const myNumber = new Promise((resolve, reject) => {
    try {
        console.log("testando promise");
        resolve(isEvenOrPrime(2))
    } catch (e) {
        console.log("promise rejeitada por causa do erro: " + e);
        reject(e);
    }
})

myNumber
    .then((resposta) =>  console.log("tudo certo"))
    .catch((erro) => console.log("temos um problema: " + erro))

myNumber
    .then(resposta => { console.log(resposta) }, erro => { console.log("esse erro " + erro) })
