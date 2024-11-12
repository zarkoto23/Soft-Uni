function solve(arr) {
  let map = new Map();

  const [J, Q, K, A] = [11, 12, 13, 14];

  for (let info of arr) {
    let [name, value] = info.split(": ");

    if (map.has(name)) {
      map.get(name).push(...value.split(", "));
    } else {
      map.set(name, value.split(", "));
    }
  }
  for (let [name, value] of map) {
    let unique = [...new Set(value)];
    map.set(name, unique);
  }

  for (let [name, unique] of map) {
    let points = 0;

    for (let double of unique) {
      let one = double[0];
      let multi = double[1];
      if (one === "1") {
        one = 10;
        multi = double[2];
      }

      if (one === "J") {
        one = 11;
      } else if (one === "Q") {
        one = 12;
      } else if (one === "K") {
        one = 13;
      } else if (one === "A") {
        one = 14;
      }

      if (multi === "S") {
        points += 4 * Number(one);
      } else if (multi === "H") {
        points += 3 * Number(one);
      } else if (multi === "D") {
        points += 2 * Number(one);
      } else if (multi === "C") {
        points += Number(one);
      }
    }
    map.set(name, points);
  }
  for (let [name, points] of map) {
    console.log(`${name}: ${points}`);
  }
}

solve([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
