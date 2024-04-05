function solve(arr) {
  let sum = 0;
  let newArr = arr.map(Number);
  for (let i = 0; i <= newArr.length - 1; i++) {
    if (newArr[i] % 2 === 0) {
      sum += newArr[i];
    }
  }

  console.log(sum);
}
solve(["2", "4", "6", "8", "10"]);
