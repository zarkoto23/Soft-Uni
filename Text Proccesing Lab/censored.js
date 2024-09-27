function solve(str, word) {
  while (str.includes(word)) {
    let censored = "*".repeat(word.length);
    str = str.replace(word, censored);
  }
  console.log(str);
}
solve("A small sentence with some words", "small");
