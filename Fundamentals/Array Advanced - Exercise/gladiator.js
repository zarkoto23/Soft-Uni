function solve(arr) {
  let inventory = arr.shift().split(" ");

  for (command of arr) {
    let [com, item] = command.split(" ");
    if (com === "Buy" && !inventory.includes(item)) {
      inventory.push(item);
    } else if (com === "Trash" && inventory.includes(item)) {
      inventory.splice(inventory.indexOf(item), 1);
    } else if (com === "Repair" && inventory.includes(item)) {
      inventory.splice(inventory.indexOf(item), 1);
      inventory.push(item);
    } else if (com === "Upgrade") {
      let [one, two] = item.split("-");
      if (inventory.includes(one)) {
        let txt = `${one}:${two}`;
        inventory.splice(inventory.indexOf(one) + 1, 0, txt);
      }
    }
  }

  console.log(inventory.join(" "));
}

solve([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
