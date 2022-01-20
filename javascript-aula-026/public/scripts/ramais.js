module.exports.organizarRamais = (_lista) => {
    //codigo para organizar por nome
    /* let organizado = _lista.sort(function (x, y) {
            let a = x.Nome.toUpperCase(),
            b = y.Nome.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
        }); */

        //codigo para organizar por ramal
        let organizado = _lista.sort(function (x, y) {
            let a = x.Ramal,
            b = y.Ramal;
        return a == b ? 0 : a > b ? 1 : -1;
        });  
    return organizado;
}