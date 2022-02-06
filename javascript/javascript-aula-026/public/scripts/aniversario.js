module.exports.filtrarAniversario = (_lista, _pesquisa) =>{
    function pesquisa(_array){
        _pesquisa = _pesquisa.toString();
        let array = _array.Nascimento.split("/");
        if(array[1] === _pesquisa){
            return _array.Nascimento;
        }
    }

    let aniversariantes = _lista.filter(pesquisa);
    return aniversariantes;
 };