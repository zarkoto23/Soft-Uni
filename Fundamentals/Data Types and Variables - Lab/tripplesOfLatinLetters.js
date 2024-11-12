function asd(num) {
  let numToLetter = String.fromCharCode(num + 97);

  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        console.log(
          `${String.fromCharCode(a + 97)}${String.fromCharCode(
            b + 97
          )}${String.fromCharCode(c + 97)}`
        );
      }
    }
  }
}
asd(2);
