function sorting(arr) {
  let newArr = arr.sort((a, b) => b - a);

  let result = [];

  while (newArr.length > 0) {
    let big = newArr.shift();
    result.push(big);

    if (newArr.length > 0) {
      let small = newArr.pop();
      result.push(small);
    }
  }

  console.log(result);
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
