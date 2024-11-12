function searchForNum(arr, com) {
  let [cut, del, searchNum] = [com[0], com[1], com[2]];

  let newArr = arr.slice(0, cut);
  newArr.splice(0, del);
  let result = 0;

  while (newArr.includes(searchNum)) {
    result += 1;
    newArr.splice(newArr.indexOf(searchNum), 1);
  }

  console.log(`Number ${searchNum} occurs ${result} times.`);
}

searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
