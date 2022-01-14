const matriz = [
    ["banana","maça","pera"],
    ["abacaxi","pessego","uva"], 
    ["limão","melância","laranja"]
];

const linhas = 3;
const colunas = 3;

function leituraMatriz(_array, _linhaAtual, _colunaAtual){
    if(_colunaAtual >= colunas){
        return 0;
    }
    if(_linhaAtual >= linhas){
        return 1;
    }
    
    console.log(_array[_linhaAtual][_colunaAtual]);

    if(leituraMatriz(_array, _linhaAtual, _colunaAtual+1) === 1){
        return 1;
    }
    console.log("ultima coluna");
    return leituraMatriz(_array, _linhaAtual +1, 0);
}

leituraMatriz(matriz, 0, 0);

