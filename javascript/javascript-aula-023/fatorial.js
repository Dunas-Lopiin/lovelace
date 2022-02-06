function fatorial(num){
  if(num === 1){
    return num;
  }
  return num * fatorial(num-1);
}

console.log(fatorial(20));