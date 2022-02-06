function multiplicador(n) {
    return function(x) {
        return x * n;
    };
}

let multiplicarPor5 = multiplicador(5);

console.log(multiplicarPor5(10));

console.log(multiplicarPor5(12));

console.log(multiplicarPor5(7));    