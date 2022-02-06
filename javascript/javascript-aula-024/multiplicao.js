function multiplicacao(_num1, _num2, _num3, _num4) {
    return _num1 * _num2 * _num3 * _num4;
}
  
const numeros = [5, 2, 3, 4];
  
console.log(multiplicacao(...numeros));