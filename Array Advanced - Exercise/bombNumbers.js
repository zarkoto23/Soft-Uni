function bomb(arr, bombNums) {
  let [specNum, range] = [bombNums[0], bombNums[1]];

  while (arr.indexOf(specNum) !== -1) {
    arr.splice(arr.indexOf(specNum) - range, range + range + 1);
  }
  let result = 0;

  for (num of arr) {
    result += num;
  }

  console.log(result);
}

bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
