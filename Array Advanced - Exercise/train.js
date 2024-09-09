function train(arr) {
  let wagons = arr.shift().split(" ");
  let capacity = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let move = arr[i].split(" ");
    if (move[0] === "Add") {
      wagons.push(move[1]);
    } else {
      for (let j = 0; j < wagons.length; j++) {
        if (Number(wagons[j]) + Number(move[0]) <= Number(capacity)) {
          wagons[j] = Number(wagons[j]) + Number(move[0]);
          break;
        } else {
          continue;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
