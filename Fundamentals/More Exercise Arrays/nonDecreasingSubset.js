function non(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= biggest) {
        newArr.push(arr[i]);
        biggest = arr[i];
      } else {
        continue;
      }
    }
    console.log(newArr.filter((el, index) => el >= Math.max(...newArr.slice(0, index))).join(' '));
  }
non([ -20, -3, 2, -415, 6, 77])
