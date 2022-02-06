 module.exports.filtrarSetor = (_lista, _pesquisa) =>{
    function pesquisa(_array){
        _array.sector = _array.sector.toLowerCase();
        return _array.sector === _pesquisa;
    }

    const filtrar = _lista.filter(pesquisa);
    console.log(filtrar);
    return filtrar;
 };