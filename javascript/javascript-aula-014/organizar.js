let numeros = arr => arr.map(Number);
let numerosR = [];
let num1;
let num2;
let num3;
let num4;

function guardar(){
    numeros = [];
    num1 = parseFloat(document.getElementById("numero1").value);
    num2 = parseFloat(document.getElementById("numero2").value);
    num3 = parseFloat(document.getElementById("numero3").value);
    num4 = parseFloat(document.getElementById("numero4").value);
    numeros.push(num1, num2, num3, num4);
    document.getElementById("array").innerHTML = numeros[0];
    document.getElementById("array2").innerHTML = numeros[1];
    document.getElementById("array3").innerHTML = numeros[2];
    document.getElementById("array4").innerHTML = numeros[3];
}

function arrumar(){
    numerosR = [];
    numL = numeros.length;
    for(i = 0; i < numL; i++){
        let atual = numeros[i];
        numerosR.unshift(atual);
        console.log(numerosR);
    }
    numeros = numerosR;
    document.getElementById("array").innerHTML = numeros[0];
    document.getElementById("array2").innerHTML = numeros[1];
    document.getElementById("array3").innerHTML = numeros[2];
    document.getElementById("array4").innerHTML = numeros[3];
}

function crescente(){
    numL = numeros.length;
    for(i = 0; i < numL; i++){
        for(j = i+1; j < numL; j++){
            if(numeros[i] > numeros[j]){
                let valor = numeros[j];
                numeros[j] = numeros[i];
                numeros[i] = valor;
            }
        }
    }
    document.getElementById("array").innerHTML = numeros[0];
    document.getElementById("array2").innerHTML = numeros[1];
    document.getElementById("array3").innerHTML = numeros[2];
    document.getElementById("array4").innerHTML = numeros[3];
}