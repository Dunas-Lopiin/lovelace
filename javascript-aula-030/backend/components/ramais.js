module.exports.organizarRamais = (_lista) => {
    //codigo para organizar por nome
    let organizado = _lista.sort(function (x, y) {
        let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
    }); 

        //codigo para organizar por "Ramal"
        /*
        let organizado = _lista.sort(function (x, y) {
            let a = x."Ramal",
            b = y."Ramal";
        return a == b ? 0 : a > b ? 1 : -1;
        });
*/
    let somenteRamal = organizado.map(function(_elemento){
        return [_elemento.name, _elemento.extension];
    })
    return somenteRamal;
}