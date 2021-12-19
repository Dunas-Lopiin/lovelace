const recibos = []; //objeto que gardará as informações
let reajustado = [];

/* Calcula a quantos dias o pagamento está atrasado */
function atraso(item){
    let vencimento = new Date(item.VencimentoReal);
    let atual = new Date();
    let diferenca = atual - vencimento;
    diferenca = Math.floor(diferenca / (1000 * 3600 * 24));
    return diferenca;
}

/* Calcula o reajuste de juros dependendo se o pagamento está atrasado ou não */
function reajuste(){
    reajustado.length = 0;
    const Reajuste = recibos.map(function(item){
        let atrasado = atraso(item);
        if(atrasado > 0){
            return {
                Cliente: item.Cliente,
                Vencimento: item.Vencimento,
                VencimentoReal: item.VencimentoReal,
                Valor: item.Valor,
                Mora: 0.02,
                Juros: atrasado * 0.001,
                Total: item.Valor + item.Valor * ((atrasado * 0.001) + 0.02)
            }
        }
        else{
            return {
                Cliente: item.Cliente,
                Vencimento: item.Vencimento,
                VencimentoReal: item.VencimentoReal,
                Valor: item.Valor,
                Mora: 0,
                Juros: 0,
                Total: item.Valor
            }
        }   
    });
    reajustado = Reajuste.slice();
    Reajuste.forEach(element => {
        escreverNovo(Reajuste, element);
    });
}

/* Adiciona as informações do reajuste a tabela */
function escreverNovo(pai, element){
    let posicao = pai.indexOf(element);
    posicao = posicao + 1;
    document.getElementById("cliente" + posicao).innerHTML = element.Cliente;      
    document.getElementById("vencimento" + posicao).innerHTML = element.Vencimento;        
    document.getElementById("valor" + posicao).innerHTML = "R$" + element.Valor.toFixed(2);
    document.getElementById("mora" + posicao).innerHTML = element.Mora * 100 + "%";
    document.getElementById("juros" + posicao).innerHTML = (element.Juros * 100).toFixed(2) + "%";
    document.getElementById("total" + posicao).innerHTML = "R$" + element.Total.toFixed(2);
}

/* Limpa a tabela */
function limpar(){
    document.getElementById("nome").value = '';      
    document.getElementById("data").value = '';        
    document.getElementById("val").value = '';
}

/* Insere as informações do formulário a tabela e ao vetor de objeto recibos */
function recibo(){
    let data = new Date(document.getElementById("data").value.replace(/-/g, '\/'));
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let recibo = {
        Cliente: document.getElementById("nome").value,
        Vencimento: dia + '/' + mes + '/' + ano,
        VencimentoReal: new Date(document.getElementById("data").value),
        Valor: parseFloat(document.getElementById("val").value),
        Mora: '',
        Juros: '',
        Total: ''
    }
    recibos.push(recibo);
    limpar();
    escrever(recibos[recibos.length-1]);
}

/* Função que escreve as novas informaçẽos na tabela */
function escrever(item){
    let linha = document.createElement("tr");
    let cliente = document.createElement("td");
    cliente.id = "cliente" + recibos.length;
    let vencimento = document.createElement("td");
    vencimento.id = "vencimento" + recibos.length;
    let valor = document.createElement("td");
    valor.id = "valor" + recibos.length;
    let mora = document.createElement("td");
    mora.id = "mora" + recibos.length;
    let juros = document.createElement("td");
    juros.id = "juros" + recibos.length;
    let total = document.createElement("td");
    total.id = "total" + recibos.length;
    cliente.innerHTML = item.Cliente;
    vencimento.innerHTML = item.Vencimento;
    valor.innerHTML = "R$" + item.Valor.toFixed(2);
    mora.innerHTML = item.Mora;
    juros.innerHTML = item.Juros;
    linha.append(cliente, vencimento, valor, mora, juros, total);
    document.getElementById("tabela").appendChild(linha);
}

let tabela = false;

/* Limpa a tabela para que possa exibir novos valores */
function limparTabela(){
    let elem = document.getElementById("tabelaTotal");
    elem.parentNode.removeChild(elem);
    let linha = document.createElement("tr");
    let tabela = document.createElement("table");
    tabela.id = "tabelaTotal";
    let cli = document.createElement("th");
    cli.innerHTML = "Cliente";
    let Val = document.createElement("th");
    Val.innerHTML = "Valor";
    linha.append(cli, Val);
    document.getElementById("separa2").appendChild(tabela);
    document.getElementById("tabelaTotal").appendChild(linha);
}

/* Cria uma nova tabela que exibe os valores totais */
function escreverTotal(pai, item){
    let linha = document.createElement("tr");
    let cliente = document.createElement("td");
    let total = document.createElement("td");
    cliente.innerHTML = item;
    total.innerHTML = "R$" + pai[item].toFixed(2);
    linha.append(cliente, total);
    document.getElementById("tabelaTotal").appendChild(linha);
}

/* Limpa a tabela de filtro para que possa exibir novos valores */
function limparTabelaFiltro(){
    let elem = document.getElementById("tabelaFiltro");
    elem.parentNode.removeChild(elem);
    let linha = document.createElement("tr");
    let tabela = document.createElement("table");
    tabela.id = "tabelaFiltro";
    let cli = document.createElement("th");
    cli.innerHTML = "Cliente";
    let ven = document.createElement("th");
    ven.innerHTML = "Vencimento";
    let val = document.createElement("th");
    val.innerHTML = "Valor";
    let mor = document.createElement("th");
    mor.innerHTML = "Mora";
    let jur = document.createElement("th");
    jur.innerHTML = "Juros";
    let tot = document.createElement("th");
    tot.innerHTML = "Total a pagar";
    linha.append(cli, ven, val, mor, jur, tot);
    document.getElementById("separa1").appendChild(tabela);
    document.getElementById("tabelaFiltro").appendChild(linha);
}

function escreverFiltro(item){
    let linha = document.createElement("tr");
    let cliente = document.createElement("td");
    let vencimento = document.createElement("td");
    let valor = document.createElement("td");
    let mora = document.createElement("td");
    let juros = document.createElement("td");
    let total = document.createElement("td");
    cliente.innerHTML = item.Cliente;
    vencimento.innerHTML = item.Vencimento;
    valor.innerHTML = "R$" + item.Valor.toFixed(2);
    mora.innerHTML = (item.Mora * 100).toFixed(2) + "%";
    juros.innerHTML = (item.Juros * 100).toFixed(2) + "%";
    total.innerHTML = "R$" + item.Total.toFixed(2);
    linha.append(cliente, vencimento, valor, mora, juros, total);
    document.getElementById("tabelaFiltro").appendChild(linha);
}

/* Calcula a divida total por cliente */
function contagem(accumulator, valorAtual){
    const clienteCont = accumulator[valorAtual.Cliente]; // Captura a o nome atual do cliente
    
    /* Define as propriedades do objeto valor */
    let valor = {
        Cliente: valorAtual.Cliente,
        Total: valorAtual.Total
    } 
    /* Caso o clienteCont seja igual ao cliente atual, soma o total ao total do cliente que estamos criando */
    if(clienteCont){
        accumulator[valorAtual.Cliente] = clienteCont + valorAtual.Total;
    }
    /* Cria um novo cliente com o valor total do cliente */
    else{
        accumulator[valorAtual.Cliente] = valor.Total;
    }
    return accumulator;
}

/* Calcula a divida total por Data */
function contagemData(accumulator, valorAtual){
    const dataCont = accumulator[valorAtual.Vencimento]; // Captura a o nome atual do cliente
    
    /* Define as propriedades do objeto valor */
    let valor = {
        Vencimento: valorAtual.Vencimento,
        Total: valorAtual.Total
    } 
    /* Caso o clienteCont seja igual ao cliente atual, soma o total ao total do cliente que estamos criando */
    if(dataCont){
        accumulator[valorAtual.Vencimento] = dataCont + valorAtual.Total;
    }
    /* Cria um novo cliente com o valor total do cliente */
    else{
        accumulator[valorAtual.Vencimento] = valor.Total;
    }
    return accumulator;
}

/* Organiza clientes por nome */
function sortNome(){
    const valorInicial = {};
    reajuste();
    reajustado.sort(function (x, y) {
        let a = x.Cliente.toUpperCase(),
        b = y.Cliente.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
    });
    
    reajustado.forEach(element => {
        escreverNovo(reajustado, element);
    });

    reajustado.reduce(contagem, valorInicial);
    limparTabela();
    Object.keys(valorInicial).forEach(element => {
        escreverTotal(valorInicial, element);
    });
};

/* Organiza clientes por data */
function sortData(){
    const valorInicial = [];
    reajuste();
    reajustado.sort(function (x, y) {
        let a = new Date(x.VencimentoReal),
            b = new Date(y.VencimentoReal);
        return a - b;
    });

    reajustado.forEach(element => {
        escreverNovo(reajustado, element);
    });
    
    reajustado.reduce(contagemData, valorInicial);
    limparTabela();
    Object.keys(valorInicial).forEach(element => {
        escreverTotal(valorInicial, element);
    });
}

function filtro(){
    let valorMin = document.getElementById("valMin").value;
    let valorMax = document.getElementById("valMax").value;
    let dataMin = new Date(document.getElementById("dataMin").value);
    let dataMax = new Date(document.getElementById("dataMax").value);
    let filtro = '';
    
    if(valorMin > -1 || valorMax >=1){
        filtro = reajustado.filter(filtrarValor);
    }
    else if(dataMin != 'Invalid Date' || dataMax != 'Invalid Date'){
        filtro = reajustado.filter(filtrarData);
    }
    
    if(dataMin != 'Invalid Date' && filtro != '' || dataMax != 'Invalid Date' && filtro != ''){
        filtro = filtro.filter(filtrarData);
    }

    limparTabelaFiltro();
    filtro.forEach(element => {
        escreverFiltro(element);
    })
}


function filtrarValor(lista){
    let valorMin = document.getElementById("valMin").value;
    let valorMax = document.getElementById("valMax").value;

    if(valorMin > -1 && valorMax <= 0){
        return lista.Valor >= valorMin;
    }
    else if(valorMin <= 0 && valorMax >= 1){
        return lista.Valor <= valorMax;
    }
    else{
        return lista.Valor >= valorMin && lista.Valor <= valorMax;
    }
}

function filtrarData(lista){
    console.log(reajustado);
    let dataMin = new Date(document.getElementById("dataMin").value);
    let dataMax = new Date(document.getElementById("dataMax").value);

    console.log("data maxima: " + dataMax + ". Data minima: " +  dataMin);

    if(dataMin != 'Invalid Date' && dataMax != 'Invalid Date'){
        console.log("data minima e maxima");
        console.log(lista.VencimentoReal);
        return lista.VencimentoReal >= dataMin && lista.VencimentoReal <= dataMax;
    }
    else if(dataMin != 'Invalid Date'){
        console.log("data minima");
        return lista.VencimentoReal >= dataMin;
    }
    else if(dataMax != 'Invalid Date'){
        console.log("data maxima");
        return lista.VencimentoReal <= dataMax;
    }
    
    else{
        console.log("insira uma data valida");
    }
}