function solve(str) {
  let half = str.length / 2;

  let firstHalf = str.substring(0, half);
  let reversedFirstHalf = firstHalf.split("").reverse().join("");

  let secondHalf = str.substring(half);
  let reversedSecondHalf = secondHalf.split("").reverse().join("");

  console.log(reversedFirstHalf);
  console.log(reversedSecondHalf);
}
solve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
