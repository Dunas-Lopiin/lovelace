module.exports.filtrarAniversario = (_lista, _pesquisa) =>{
    function pesquisa(_array){
        _pesquisa = _pesquisa.toString();
        let array = _array.birthDay.split("-");
        if(array[1] === _pesquisa){
            return _array.birthDay;
        }
    }

    let aniversariantes = _lista.filter(pesquisa);
    return aniversariantes;
 };