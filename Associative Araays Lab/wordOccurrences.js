function occur(arr) {
  let map = new Map();

  for (let str of arr) {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
    }
  }
  let arrrr = Array.from(map);
  arrrr.sort(([wordA, countA], [wordB, countB]) => countB - countA);
  for (let [word, count] of arrrr) {
    console.log(`${word} -> ${count} times`);
  }
}

occur([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
