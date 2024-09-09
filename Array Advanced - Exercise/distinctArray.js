function distinct(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }

  console.log(result.join(" "));
}

distinct([20, 8, 12, 13, 4, 4, 8, 5]);
