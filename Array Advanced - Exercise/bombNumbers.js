function bomb(arr, bombNums) {
  let [specNum, range] = bombNums;

  while (arr.includes(specNum)) {
    let index = arr.indexOf(specNum);
    let start = Math.max(index - range, 0);
    let deleteCount = range * 2 + 1; 

    arr.splice(start, deleteCount);
  }

  let result = 0
  for (num of arr){
    result+=num
  }

  console.log(result);
}
bomb([1, 4, 4, 2, 8, 9, 1],
  [9, 3]
  
  
  
  
  );
