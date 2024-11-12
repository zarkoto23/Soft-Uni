function dungeos(arr) {
  let health = 100;
  let coins = 0;
  let rooms = 0;
  let newArr = arr[0].split("|");
  for (let i = 0; i < newArr.length; i++) {
    rooms += 1;
    let curr = newArr[i].split(" ");
    let word = curr[0];
    let num = Number(curr[1]);

    if (word === "potion") {
      if (health + num > 100) {
        num = 100 - health;
        health = 100;
      } else {
        health += num;
      }
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (word === "chest") {
      coins += num;
      console.log(`You found ${num} coins.`);
    } else {
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${word}.`);
      } else {
        console.log(`You died! Killed by ${word}.`);
        console.log(`Best room: ${rooms}`);
        return;
      }
    }
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
} //dungeos(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeos(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
