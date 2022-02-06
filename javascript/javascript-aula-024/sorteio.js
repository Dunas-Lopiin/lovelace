
function sorteio(){
    const numerosAleatorios = [];
    let numero;
    for(let i = 0; i < 10; i++){
        numero = parseInt(Math.random() * (100 - 1) + 1);
        numerosAleatorios.push(numero);
    }
    return Math.max(...numerosAleatorios);
}

const numerosSorteados = sorteio();

console.log(numerosSorteados);