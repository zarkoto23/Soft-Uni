function asd(num) {
  for (let i = 1; i <= num; i++) {
    let strNum = String(i);
    let sum = 0;

    for (let b = 0; b <= strNum.length - 1; b++) {
      sum += Number(strNum[b]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
asd(20);
