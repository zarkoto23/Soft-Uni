function factoriel(numOne, numTwo) {
  let resultOne = numOne;
  let resultTwo = numTwo;
  for (let i = numOne - 1; i > 0; i--) {
    resultOne *= i;
  }
  for (let i = numTwo - 1; i > 0; i--) {
    resultTwo *= i;
  }

  console.log((resultOne / resultTwo).toFixed(2));
}

factoriel(6, 2);
