module.exports.funcionarios = (_lista) => {
    let organizado = _lista.sort(function (x, y) {
        let a = x.Nome.toUpperCase(),
        b = y.Nome.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
    }); 
    return organizado;
}