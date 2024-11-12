function solve(arr) {
  const obtained = {
    motes: "Dragonwrath",
    fragments: "Valanyr",
    shards: "Shadowmourne",
  };

  let legend = { motes: 0, shards: 0, fragments: 0 };
  let junk = {};

  let str = arr.toLowerCase().split(" ");

  for (let i = 0; i < str.length; i += 2) {
    let [pcs, material] = [Number(str[i]), str[i + 1]];

    if (legend.hasOwnProperty(material)) {
      legend[material] += pcs;

      if (legend[material] >= 250) {
        console.log(`${obtained[material]} obtained!`);
        legend[material] -= 250;
        break;
      }
    } else {
      if (!junk[material]) {
        junk[material] = 0;
      }
      junk[material] += pcs;
    }
  }
  let legendSorted = Object.entries(legend);
  legendSorted.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  let junkSorted = Object.entries(junk);
  junkSorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const el of legendSorted) {
    console.log(`${el[0]}: ${el[1]}`);
  }
  for (const el of junkSorted) {
    console.log(`${el[0]}: ${el[1]}`);
  }
}

//solve(
// '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
//);

solve("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
