function isEqual(arr1, arr2) {
  let arrOne = arr1.map(Number);
  let arrTwo = arr2.map(Number);
  let isEqualll = true;
  let sum = 0;
  let index = 0;

  for (let i = 0; i <= arr1.length - 1; i++) {
    index++;
    if (arr1[i] === arr2[i]) {
      sum += Number(arr1[i]);
    } else {
      isEqualll = false;
      index--;
      break;
    }
  }
  if (isEqualll) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}
isEqual(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
