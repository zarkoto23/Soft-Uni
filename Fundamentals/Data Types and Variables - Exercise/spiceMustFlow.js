function spice(yield) {
  let storage = 0;
  let days = 0;

  while (yield >= 100) {
    storage += yield - 26;
    yield -= 10;
    days += 1;
  }
  storage -= 26;
  if (storage <= 0) {
    storage = 0;
  }
  console.log(days);
  console.log(storage);
}
spice(450);

//11, 1338

//mine - 10 1264
