function max(arr) {
  let result = [];
  while (arr.length !== 0) {
    let current = arr.shift();
    let biggest = Math.max(...arr);
    if (current > biggest) result.push(current);
  }
  console.log(result.join(" "));
}

max([14, 24, 3, 25, 15, 17]);
