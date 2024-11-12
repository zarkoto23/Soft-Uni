function solve(word, str) {
  let wordSplit = word.split(", ");
  let result = "";

  for (let word of wordSplit) {
    const symb = "*".repeat(word.length);
    let splited = str.split(" ");

    for (const el of splited) {
      if (el === symb) {
        result = str.replace(el, word);
        str = result;
      }
    }
  }

  console.log(result);
}
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
