function houseParty(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let [name, is, command] = arr[i].split(" ");
    if (!result.includes(name) && command === "going!") {
      result.push(name);
    } else if (!result.includes(name) && command === "not") {
      console.log(`${name} is not in the list!`);
    } else if (result.includes(name) && command === "going!") {
      console.log(`${name} is already in the list!`);
    }
    if (result.includes(name) && command === "not") {
      result.splice(result.indexOf(name), 1);
    }
  }
  console.log(result.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
