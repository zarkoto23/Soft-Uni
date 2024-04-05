function calc(param1, operator, param2) {
  switch (operator) {
    case "+":
      console.log((param1 + param2).toFixed(2));
      break;
    case "-":
      console.log((param1 - param2).toFixed(2));
      break;
    case "*":
      console.log((param1 * param2).toFixed(2));
      break;
    default:
      console.log((param1 / param2).toFixed(2));
      break;
  }
}
calc(5, "+", 10);
