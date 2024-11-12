function glad(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
  let hemledBroken = 0;
  let swordBroken = 0;
  let shieldBroken = 0;
  let armorBroken = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      hemledBroken += 1;
    }
    if (i % 3 === 0) {
      swordBroken += 1;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      shieldBroken += 1;
    }
  }
  if (shieldBroken > 1) {
    armorBroken = Math.floor(shieldBroken / 2);
  }

  //console.log(hemledBroken, swordBroken, shieldBroken, armorBroken)
  let total = (
    hemledBroken * helmPrice +
    swordBroken * swordPrice +
    shieldBroken * shieldPrice +
    armorBroken * armorPrice
  ).toFixed(2);
  console.log(`Gladiator expenses: ${total} aureus`);
}
glad(7,
2,
3,
4,
5)

