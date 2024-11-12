function solve(arr) {
  let invite = new Set(arr.splice(0, arr.indexOf("PARTY")));
  arr.splice(0,1)

  let comes = new Set(arr.splice(arr.indexOf("PARTY"), arr.length));
  console.log(comes)

  let didntCome = invite.size - comes.size;

  let difference = new Set([...invite].filter((item) => !comes.has(item)));
  let lastArr = Array.from(difference);
  let vip = [];
  let novip = [];
  for (let gest of lastArr) {
    if (gest[0] >= 0 && gest[0] <= 9) {
      vip.push(gest);
    } else {
      novip.push(gest);
    }
  }

  let final = [...vip, ...novip];

  // console.log(didntCome);
  // console.log(final.join("\n"));
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

// solve([
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "xys2FYzn",
//   "MDzcM9ZK",
//   "PARTY",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
// ]);
