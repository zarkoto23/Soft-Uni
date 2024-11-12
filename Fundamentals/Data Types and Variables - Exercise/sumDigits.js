function asd(digit) {
  let strNum = String(digit);
  let sum = 0;

  for (let i = 0; i <= strNum.length - 1; i++) {
    sum += Number(strNum[i]);
  }
  console.log(sum);
}
asd(97561);
