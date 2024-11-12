function negativeOrPositiveNum(arr) {
  let result = [];
  for (let item of arr) {
    if (Number(item) < 0) {
      result.unshift(item);
    } else {
      result.push(item);
    }
  }

  console.log(result.join("\n"));
}

negativeOrPositiveNum(["7", "-2", "8", "9"]);
