let operand1;
let operand2;
let operation;
let valor1;
let valor2;
let valorOperacao;
let valorPassado = "";
let final = false;

function matematica(){
    function setOperand1(_operand1){
        operand1 = _operand1;
    }
    function setOperand2(_operand2){
        operand2 = _operand2;
    }
    function setOperation(_operation){
        operation = _operation;
    }
    function clearCalculator(){
        operand1 = undefined;
        operand2 = undefined;
        operation = undefined;
    }
    function getResult(){
        if(operand2 === "0" && operation === "/"){
            alert("não é possivel dividir por zero!");
            return false;
        }
        operand1 = parseInt(operand1, 10);
        operand2 = parseInt(operand2, 10);
        if(operation === "+"){
            let resultado = operand1 + operand2;
            return resultado;
        }
        else if(operation === "-"){
            let resultado = operand1 - operand2;
            return resultado;
        }
        else if(operation === "/"){
            let resultado = operand1 / operand2;
            return resultado;
        }
        else if(operation === "*"){
            let resultado = operand1 * operand2;
            return resultado;
        }
    }
    return{
        setOperand1,
        setOperand2,
        setOperation,
        getResult,
        clearCalculator
    }
}

let calcular = matematica();

function getValue(num){
    if(valor1 === undefined){
        const operacao1 = valorPassado + num;
        valorPassado = operacao1;
        $("#operacao1").text(operacao1);
        return operacao1;
    }
    else if(operand1 !== undefined){
        const operacao2 = valorPassado + num;
        valorPassado = operacao2;
        $("#operacao2").text(operacao2);
        return operacao2;
    }
}

function clearExibition(){
    valor1 = undefined;
    valor2 = undefined;
    valorOperacao = undefined;
    valorPassado = "";
    $("#operacao1").text("");
    $("#operacao2").text("");
    $("#operador").text("");
}

function defineStep(element){
    clearCalculator();
    if(element === "+" || element === "-" || element === "/" || element === "*"){
        if(valor1 === undefined && valorPassado === ""){
            alert("adicione numeros primeiro!");
            return false;
        }
        else if(valor1 === undefined && valorPassado !== undefined){
            valor1 = valorPassado;
            valorOperacao = element;
            $("#operacao1").text(valor1);
            $("#operador").text(valorOperacao);
            valorPassado = "";
            return false;
        }
        else if(valor2 === undefined && valorPassado !== undefined){
            alert("Por favor utilize o botão = para ver o resultado ou o botão C para limpar a calculadora");
            return false;
        }
    }
    else if(element === "C"){
        clearCalculator();
    }
    else if(element === "="){
        if(valor1 === undefined && valorPassado !== undefined){
            alert("por favor digite o primeiro valor ou utilize um operador ( como + ou - ) para continuar");
            return false;
        }
        else if(valor2 === undefined && valorPassado === ""){
            alert("por favor digite o segundo valor ou utilize um operador (como + ou -) para continuar");
            return false;
        }
        valor2 = valorPassado;
        if(valor2 === "0" && operation === "/"){
            alert("É impossivel dividir por zero!");
            return false;
        }
        
    }
    else{
        getValue(element);
    }
}

