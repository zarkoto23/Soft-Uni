function charInRange(one, two) {
  let a = one.charCodeAt(0);
  let b = two.charCodeAt(0);
  let result = "";

  if (b > a) {
    for (let i = a + 1; i < b; i++) {
      result += String.fromCharCode(i) + " ";
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      result += String.fromCharCode(i) + " ";
    }
  }

  console.log(result);
}
charInRange("C", "#");
