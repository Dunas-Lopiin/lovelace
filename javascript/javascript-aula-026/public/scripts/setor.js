 module.exports.filtrarSetor = (_lista, _pesquisa) =>{
    function pesquisa(_array){
        return _array.Setor === _pesquisa;
    }

    const filtrar = _lista.filter(pesquisa);
    console.log(filtrar);
    return filtrar;
    //return _lista.Setor === "construção";
 };