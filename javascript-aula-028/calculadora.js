const BOTOES = document.getElementById("bt-calculadora");
let valorPassado = "";
let final = false;

class calculadora {
    constructor(operand1, operand2, operation){
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operation = operation;
    }

    setOperand1(_operand1){
        this.operand1 = _operand1;
    }
    setOperand2(_operand2){
        this.operand2 = _operand2;
    }
    setOperation(_operation){
        document.getElementById("operador").innerHTML = _operation;
        this.operation = _operation;
    }
    getResult(){
        this.setOperand2(valorPassado);
        this.operand1 = parseInt(this.operand1, 10);
        this.operand2 = parseInt(this.operand2, 10);
        let resultado = eval(this.operand1 + this.operation + this.operand2);
        resultado = resultado;
        document.getElementById("operacao1").innerHTML = "";
        document.getElementById("operador").innerHTML = "";
        document.getElementById("operacao2").innerHTML = "";
        document.getElementById("operacao1").innerHTML = resultado;
        final = true;
        return resultado;
    }

    clearCalculator(){
        this.operand1 = undefined;
        this.operand2 = undefined;
        this.operation = undefined;
        valorPassado = "";
        document.getElementById("operacao1").innerHTML = "";
        document.getElementById("operador").innerHTML = "";
        document.getElementById("operacao2").innerHTML = "";
    }
    
    getValue(num){
        if(this.operand1 === undefined){
            const operacao1 = valorPassado + num;
            valorPassado = operacao1;
            document.getElementById("operacao1").innerHTML = operacao1;
            return operacao1;
        }
        else if(this.operand1 !== undefined){
            const operacao2 = valorPassado + num;
            valorPassado = operacao2;
            document.getElementById("operacao2").innerHTML = operacao2;
            return operacao2;
        }
    }

    defineStep(element){
        if(element === "+" || element === "-" || element === "/" || element === "*"){
            if(this.operand1 === undefined && valorPassado === ""){
                alert("adicione numeros primeiro!");
                return false;
            }
            else if(this.operand1 === undefined && valorPassado !== undefined){
                this.setOperand1(valorPassado);
                this.setOperation(element);
                document.getElementById("operacao1").innerHTML = this.operand1;
                document.getElementById("operador").innerHTML = this.operation;
                valorPassado = "";
                return false;
            }
            else if(this.operand2 === undefined && valorPassado !== undefined){
                alert("Por favor utilize o botão = para ver o resultado ou o botão C para limpar a calculadora");
                return false;
            }
        }
        else if(element === "C"){
            this.clearCalculator();
        }
        else if(element === "="){
            if(this.operand1 === undefined && valorPassado !== undefined){
                alert("por favor digite o primeiro valor ou utilize um operador ( como + ou - ) para continuar");
                return false;
            }
            else if(this.operand2 === undefined && valorPassado === ""){
                alert("por favor digite o segundo valor ou utilize um operador (como + ou -) para continuar");
                return false;
            }
            this.getResult();
        }
        else{
            this.getValue(element);
        }
    }
}

const calcular = new calculadora(); 

BOTOES.addEventListener('click', e =>{
    if (e.target.matches('button')) {
        if(final){
            calcular.clearCalculator();
            final = false;
        }
        calcular.defineStep(e.target.value);
      }
})
 