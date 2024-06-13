function arrayManipulations(arr) {
  let comand = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [move, first, second] = arr[i].split(" ");

    first = Number(first);
    second = Number(second);

    switch (move) {
      case "Add":
        comand.push(first);
        break;
      case "Remove":
        comand = comand.filter((num) => num !== first);
        break;
      case "RemoveAt":
        comand.splice(first, 1);
        break;
      case "Insert":
        comand.splice(second, 0, first);
    }
  }

  console.log(comand.join(" "));
}

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
