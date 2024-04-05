function solve(arr) {
    let sum = 0;
    let sumOdd=0
    let newArr = arr.map(Number);
    for (let i = 0; i <= newArr.length - 1; i++) {
      if (newArr[i] % 2 === 0) {
        sum += newArr[i];
      }else{
        sumOdd+=newArr[i]
      }
    }
    let result=sum-sumOdd
  
    console.log(result);
  }solve([3,5,7,9])