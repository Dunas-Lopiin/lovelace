let operand1;
let operand2;
let operation;
let valorPassado = "";
let final = false;
const BOTOES = document.getElementById("bt-calculadora");

function getValue(num){
    if(operand1 === undefined){
        const operacao1 = valorPassado + num;
        valorPassado = operacao1;
        document.getElementById("operacao1").innerHTML = operacao1;
        return operacao1;
    }
    else if(operand1 !== undefined){
        const operacao2 = valorPassado + num;
        valorPassado = operacao2;
        document.getElementById("operacao2").innerHTML = operacao2;
        return operacao2;
    }
}

function clearCalculator(){
    operand1 = undefined;
    operand2 = undefined;
    operation = undefined;
    valorPassado = "";
    document.getElementById("operacao1").innerHTML = "";
    document.getElementById("operacao2").innerHTML = "";
    document.getElementById("operador").innerHTML = "";
}

function defineStep(element){
    if(element === "+" || element === "-" || element === "/" || element === "*"){
        if(operand1 === undefined && valorPassado === ""){
            alert("adicione numeros primeiro!");
            return false;
        }
        else if(operand1 === undefined && valorPassado !== undefined){
            operand1 = valorPassado;
            operation = element;
            document.getElementById("operacao1").innerHTML = operand1;
            document.getElementById("operador").innerHTML = operation;
            valorPassado = "";
            return false;
        }
        else if(operand2 === undefined && valorPassado !== undefined){
            alert("Por favor utilize o botão = para ver o resultado ou o botão C para limpar a calculadora");
            return false;
        }
    }
    else if(element === "C"){
        clearCalculator();
    }
    else if(element === "="){
        if(operand1 === undefined && valorPassado !== undefined){
            alert("por favor digite o primeiro valor ou utilize um operador ( como + ou - ) para continuar");
            return false;
        }
        else if(operand2 === undefined && valorPassado === ""){
            alert("por favor digite o segundo valor ou utilize um operador (como + ou -) para continuar");
            return false;
        }
        operand2 = valorPassado;
        if(operand2 === "0" && operation === "/"){
            alert("É impossivel dividir por zero!");
            return false;
        }
        pesquisarGeral(operand1, operand2, operation);
    }
    else{
        getValue(element);
    }
}

function pesquisarGeral(valor1, valor2, operador){
    if(operador === "+"){
        operador = "mais";
    }
    fetch("http://localhost:3000/calculadora?operador1=" + valor1 + "&operador2=" + valor2 + "&operando=" + operador)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Temos problemas: Código  ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
            clearCalculator()
            document.getElementById("operacao1").innerHTML = data[0];
            final = true;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
};

BOTOES.addEventListener('click', e =>{
    if (e.target.matches('button')) {
        if(final){
            clearCalculator();
            final = false;
        }
        defineStep(e.target.value);
      }
})