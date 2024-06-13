function smallestTwo(arr) {
  let sorted = arr.sort((a, b) => a - b);

  console.log(sorted[0], sorted[1]);
}

smallestTwo([30, 15, 50, 5]);
