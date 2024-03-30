function asd(input) {
  let locations = Number(input[0]);
  let index = 1;
  let finish = 0;
  let avvGoldPerDay = 0;
  while (finish < locations) {
    avvGoldPerDay = 0;
    let avvExpecctProfit = Number(input[index]);
    index++;
    let daysDigging = Number(input[index]);
    index++;
    for (let i = 1; i <= daysDigging; i++) {
      let profit = Number(input[index]);
      index++;
      avvGoldPerDay += profit;
    }
    if (avvGoldPerDay >= avvExpecctProfit * daysDigging) {
      console.log(
        `Good job! Average gold per day: ${(
          avvGoldPerDay / daysDigging
        ).toFixed(2)}.`
      );
    } else {
      console.log(
        `You need ${(avvExpecctProfit - avvGoldPerDay / daysDigging).toFixed(
          2
        )} gold.`
      );
    }
    finish++;
  }
}
asd(["1", "5", "3", "10", "1", "3"]);
