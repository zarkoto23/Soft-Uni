function createCard(face, suit) {
  const validFaces = new Set([
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
  ]);

  const suits = {
    C: "\u2663",
    D: "\u2666",
    H: "\u2665",
    S: "\u2660",
  };
  if (!validFaces.has(face)) {
    throw new Error("invalid face");
  }

  if (!suits.hasOwnProperty(suit)) {
    throw new Error("invalid face");
  }

  return {
    face,
    suit,
    toString() {
      return this.face + suits[this.suit];
    },
  };
}

console.log(createCard("10", "D").toString());
console.log(createCard("A", "S").toString());
try {
  console.log(createCard("1", "C").toString());
} catch (err) {
  console.log("error creating cards:", err.message);
}
