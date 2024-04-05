function lowOrUp(char) {
  let a = char.charCodeAt(char);
  console.log(a > 96 ? "lower-case" : "upper-case");
}
lowOrUp("A");
