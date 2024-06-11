function plaindrome(arr) {
  for (let j = 0; j < arr.length; j++) {
    let isPal = true;
    let str = String(arr[j]);

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - (1 + i)]) {
        isPal = false;
      }
      if (isPal === false) {
        console.log("false");
        break;
      }
    }
    if (isPal === true) console.log("true");
  }
}
plaindrome([32, 2, 232, 1010]);
