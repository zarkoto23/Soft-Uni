function solve(arr) {
  let targetW = arr.shift().split(" ");
  let wordOneTwoObj = {};

  for (let words of targetW) {
    wordOneTwoObj[words] = 0;
  }

  for (words of arr) {
    if (words in wordOneTwoObj) {
      wordOneTwoObj[words]++;
    }
  }

  const sortedEntryes = Object.entries(wordOneTwoObj).sort(
    (a, b) => b[1] - a[1]
  );

  for (let item of sortedEntryes) {
    console.log(`${item[0]} - ${item[1]}`);
  }
}
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
