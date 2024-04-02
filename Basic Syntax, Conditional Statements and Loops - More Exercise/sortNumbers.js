// function sortNumbers(firstNum, secondNum, thirdNum) {
//   let max = 0;
//   let mid = 0;
//   let min = 0;
//   if (firstNum >= secondNum && firstNum >= thirdNum) {
//     max = firstNum;
//   } else if (secondNum >= firstNum && secondNum >= thirdNum) {
//     max = secondNum;
//   } else {
//     max = thirdNum;
//   }

//   if (
//     (firstNum >= secondNum && firstNum <= thirdNum) ||
//     (firstNum <= secondNum && firstNum >= thirdNum)
//   ) {
//     mid = firstNum;
//   } else if (
//     (secondNum >= firstNum && secondNum <= thirdNum) ||
//     (secondNum <= firstNum && secondNum >= thirdNum)
//   ) {
//     mid = secondNum;
//   } else {
//     mid = thirdNum;
//   }

//   if (firstNum < secondNum && firstNum < thirdNum) {
//     min = firstNum;
//   } else if (secondNum < firstNum && secondNum < thirdNum) {
//     min = secondNum;
//   } else {
//     min = thirdNum;
//   }
//   console.log(max);
//   console.log(mid);
//   console.log(min);
// }

// sortNumbers(-2, 1, 3);



function sortNumbers(firstNum, secondNum, thirdNum) {
    let arrayNumbers = [];
    arrayNumbers.push(firstNum, secondNum, thirdNum);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}