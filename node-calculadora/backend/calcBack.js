module.exports.calculadora = function calculadora() {
    let operand1;
    let operand2;
    let operation;

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
        let resultado = eval(operand1 + operation + operand2);
        return resultado;
    }
    return{
        setOperand1,
        setOperand2,
        setOperation,
        getResult,
        clearCalculator
    }
}
