function firstAndLastKNumbers(arr) {
  let clone = arr.slice(1);
  let k = arr[0];

  let first = clone.slice(0, k);
  let secont = clone.slice(-k);
  console.log(first.join(' '));
  console.log(secont.join(' '))
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);
