function equal(arr) {
  if (arr.length < 2) {
    console.log("0");
    return;
  }
  let result = "no";

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i <= arr.length; i++) {
    leftSum += arr[i];

    for (let a = i + 2; a <= arr.length - 1; a++) {
      rightSum += arr[a];
    }
    if (leftSum === rightSum) {
      result = i + 1;
      break;
    }
    rightSum = 0;
  }
  console.log(result);
}
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
