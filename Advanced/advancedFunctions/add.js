function add(number){
  const adNum=number

  return function func(number){
    return adNum+number
  }
}
let add5 = add(5);

console.log(add5(2));

console.log(add5(3));