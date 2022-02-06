const BOTOES = document.getElementById("bt-calculadora");


function calculadora(_htmlOp1, _htmlOp2, _htmlOperator) {
    let operand1;
    let operand2;
    let operation;
    let valorPassado = "";
    let final = false;

    function setOperand1(_operand1){
        operand1 = _operand1;
    }
    function setOperand2(_operand2){
        operand2 = _operand2;
    }
    function setOperation(_operation){
        document.getElementById(_htmlOperator).innerHTML = _operation;
        operation = _operation;
    }
    function getResult(){
        setOperand2(valorPassado);
        if(operand2 === "0" && operation === "/"){
            alert("não é possivel dividir por zero!");
            return false;
        }
        operand1 = parseInt(operand1, 10);
        operand2 = parseInt(operand2, 10);
        let resultado = eval(operand1 + operation + operand2);
        resultado = resultado;
        document.getElementById(_htmlOp1).innerHTML = "";
        document.getElementById(_htmlOperator).innerHTML = "";
        document.getElementById(_htmlOp2).innerHTML = "";
        document.getElementById(_htmlOp1).innerHTML = resultado;
        final = true;
        return resultado;
    }

    function clearCalculator(){
        operand1 = undefined;
        operand2 = undefined;
        operation = undefined;
        valorPassado = "";
        document.getElementById(_htmlOp1).innerHTML = "";
        document.getElementById(_htmlOperator).innerHTML = "";
        document.getElementById(_htmlOp2).innerHTML = "";
    }
    
    function getValue(num){
        if(operand1 === undefined){
            const operacao1 = valorPassado + num;
            valorPassado = operacao1;
            document.getElementById(_htmlOp1).innerHTML = operacao1;
            return operacao1;
        }
        else if(operand1 !== undefined){
            const operacao2 = valorPassado + num;
            valorPassado = operacao2;
            document.getElementById(_htmlOp2).innerHTML = operacao2;
            return operacao2;
        }
    }
    function setEnd(){
        final = false;
    }

    function defineStep(element){
        if(element === "+" || element === "-" || element === "/" || element === "*"){
            if(operand1 === undefined && valorPassado === ""){
                alert("adicione numeros primeiro!");
                return false;
            }
            else if(operand1 === undefined && valorPassado !== undefined){
                setOperand1(valorPassado);
                setOperation(element);
                document.getElementById(_htmlOp1).innerHTML = operand1;
                document.getElementById(_htmlOperator).innerHTML = operation;
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
            getResult();
        }
        else{
            getValue(element);
        }
    }

    return{
        setOperand1,
        setOperand2,
        setOperation,
        getResult,
        clearCalculator,
        getValue,
        defineStep,
        setEnd
    }
}

const calcular = calculadora("operacao1", "operacao2", "operador");

BOTOES.addEventListener('click', e =>{
    if (e.target.matches('button')) {
        if(calcular.final){
            calcular.clearCalculator();
            calcular.setEnd();
        }
        calcular.defineStep(e.target.value);
      }
})
