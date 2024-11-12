function asd(arr) {
  let newArr = [];
  let arrSum = Number(arr[0]);
  let arrNewSum = Number(arr[0]);
  newArr.push(arr[0]);
  for (let i = 1; i <= arr.length - 1; i++) {
    arrSum += Number(arr[i]);
    if (Number(arr[i] % 2 === 0)) {
      newArr.push(Number(arr[i] + i));
    } else {
      newArr.push(Number(arr[i] - i));
    }
    arrNewSum += Number(newArr[i]);
  }
  console.log(newArr);
  console.log(arrSum);
  console.log(arrNewSum);
}
asd([-5, 11, 3, 0, 2]);
