function asd(input) {
  let flag = true;
  let firstBit = 0;
  let moneyLeft = 0;
  let bitCoinCount = 0;
  let gramsMiningDay = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    gramsMiningDay = Number(input[i]);
    if ((i + 1) % 3 === 0) {
      gramsMiningDay *= 0.7;
    }
    moneyLeft += gramsMiningDay * 67.51;
    if (moneyLeft >= 11949.16) {
      let count = Math.floor(moneyLeft / 11949.16);
      bitCoinCount += Math.floor(moneyLeft / 11949.16);
      moneyLeft -= count * 11949.16;
    }
    if (flag === true) {
      if (bitCoinCount > 0) {
        firstBit = i + 1;
        flag = false;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitCoinCount}`);
  if (bitCoinCount >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstBit}`);
  }
  console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
asd([100, 200, 300]);
