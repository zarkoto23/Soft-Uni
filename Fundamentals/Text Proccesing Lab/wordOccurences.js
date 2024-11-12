function solve(str, word) {
  {
    let strgs = str.split(" ");
    let counter = 0;
    for (let el of strgs) {
      if (el === word) {
        counter += 1;
      }
    }
    console.log(counter);
  }
}

solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
