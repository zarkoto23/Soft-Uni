function solve(str) {
  let result = "";
  for (let el of str) {
    if (result[result.length - 1] !== el) {
      result += el;
    }
  }
  console.log(result);
}

solve("aaaaabbbbbcdddeeeedssaa");
