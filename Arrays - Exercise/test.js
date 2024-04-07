function asd(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let a = 0; a <= newArr.length - 1; a++) {
    console.log(newArr[a]);
  }
}

asd(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
