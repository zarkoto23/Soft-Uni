function solve(str) {
  let result = [];
  let temp = "";
  let splited = str.split("");

  for (let el of splited) {
    if (el.toUpperCase() && el !== el.toLowerCase()) {
      temp += ", " + el;
    } else {
      temp += el;
    }
    result.push(temp);
    temp = "";
  }
  let total = result.join("");
  console.log(total.substring(2));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
