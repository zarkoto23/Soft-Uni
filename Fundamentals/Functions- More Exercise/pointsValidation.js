function pointsValidation(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];

  function formula(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let total = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (total % 1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }

  formula(x1, y1, 0, 0);
  formula(x2, y2, 0, 0);
  formula(x1, y1, x2, y2);
}

pointsValidation([3, 0, 0, 4]);
