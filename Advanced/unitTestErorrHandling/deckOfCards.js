function printDeckOfCards(cards) {
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = {
    C: "\u2663",
    D: "\u2666",
    H: "\u2665",
    S: "\u2660",
  };
  let result = [];
  let card, color;

  for (const str of cards) {
    if (str.length > 1) {
      card = str.slice(0, -1);
      color = str.slice(-1);
    } else {
      card = str[0];
      color = str[1];
    }

    if (!validFaces.includes(card) || !suits.hasOwnProperty(color)) {
      console.log(`Invalid card: ${str}`);
      return;
    }
    result.push(`${card}${suits[color]}`);
  }

  console.log([...result].join(" "));
}

printDeckOfCards(["5S", "3J", "10D", "QD"]);
