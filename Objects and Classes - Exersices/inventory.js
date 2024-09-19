function solve(arr) {
  let total = [];
  for (const str of arr) {
    const [hero, level, items] = str.split(" / ");

    const obj = {
      name: hero,
      level: Number(level),
      items: items,
    };

    total.push(obj);
  }
  total.sort((a, b) => a.level - b.level);
  for (let heros of total) {
    console.log(`Hero: ${heros.name}`);
    console.log(`level => ${heros.level}`);
    console.log(`items => ${heros.items}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
