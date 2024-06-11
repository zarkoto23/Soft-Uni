function modification(num) {
  let sum = 0;

  let numToStr = String(num);

  for (let i = 0; i < numToStr.length; i++) {
    let currentNum = Number(numToStr[i]);
    sum += currentNum;
  }
  if (sum / numToStr.length < 5) {
    numToStr = numToStr + 9;
    num = Number(numToStr);
    modification(num);
  } else {
    console.log(num);
    return;
  }
}

modification(5835);
