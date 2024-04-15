function asd(arr) {
  let accoun = arr[0].split(" ");
  let index = 1;
  while (arr[index] !== "Play!") {
    let rule = arr[index].split(" ");
    let command = rule[0];
    let game = rule[1];

    if (command === "Install") {
      if (accoun.includes(game)) {
      } else {
        accoun.push(game);
      }
    } else if (command === "Uninstall") {
      if (accoun.includes(game)) {
        accoun.splice(accoun.indexOf(game), 1);
      }
    } else if (command === "Update") {
      if (accoun.includes(game)) {
        accoun.splice(accoun.indexOf(game), 1);
        accoun.push(game);
      }
    } else if (command === "Expansion") {
      let exp = game.split("-");
      for (let i = 0; i < accoun.length; i++) {
        if (accoun[i] === exp[0]) {
          let b = accoun.indexOf(exp[0]);
          accoun.splice(b + 1, 0, `${exp[0]}:${exp[1]}`);
        }
      }
    }
    index++;
  }

  console.log(accoun.join(" "));
}
asd([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);

// asd(['CS WoW Diablo',
// 'Uninstall XCOM',
// 'Update PeshoGame',
// 'Update WoW',
// 'Expansion Civ-V',
// 'Play!']
// )
