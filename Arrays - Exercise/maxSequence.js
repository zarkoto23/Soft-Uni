function asd(arr) {
  arr = arr.map(Number);
  let max = [];
  let current = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      current.push(arr[i]);
      if (max.length < current.length) {
        max = current;
      }
    } else {
      current = [];
    }
  }
  max.push(max[0]);
  console.log(max.join(" "));
}
asd([0, 1, 1, 5, 2, 2, 6, 3, 3]);
