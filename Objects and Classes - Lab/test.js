function bomb(arr, bombNums) {
  let [specNum, range] = bombNums;

  while (arr.includes(specNum)) {
    let index = arr.indexOf(specNum);
    let start = Math.max(index - range, 0); // стартов индекс (поне 0)
    let deleteCount = range * 2 + 1; // брой елементи за премахване (range преди, самият елемент, и range след)

    arr.splice(start, deleteCount); // премахваме елементите
  }

  let result = arr.reduce((sum, num) => sum + num, 0); // пресмятаме сумата

  console.log(result);
}

bomb([1, 7, 7, 1, 2, 3],
  [7, 1]
  
  )