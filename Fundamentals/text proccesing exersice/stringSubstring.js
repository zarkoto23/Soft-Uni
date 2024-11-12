function solve(word, str) {
  let caseLow = str.toLowerCase().split(" ");

  if (caseLow.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
solve("python", "JavaScript is the best programming language");
