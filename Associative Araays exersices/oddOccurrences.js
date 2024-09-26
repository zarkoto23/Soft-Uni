function solve(str) {
  let workStr = str.toLowerCase().split(" ");

  let map = new Map();

  for (let word of workStr) {
    if (map.has(word)) {
      const current = map.get(word);
      map.set(word, current + 1);
    } else {
      map.set(word, 1);
    }
  }

  let sorted = [...map].filter(([wordA, occurA]) => occurA % 2 !== 0);
  let result = [];
  for (let item of sorted) {
    result.push(item[0]);
  }
  console.log(result.join(" "));
}

solve("Cake IS SWEET is Soft CAKE sweet Food");
