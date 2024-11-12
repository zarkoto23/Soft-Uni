function login(arr) {
    let password = arr[0].split('').reverse().join('');


  for (let i = 1; i <= 4; i++) {
    if (arr[i] === password) {
      console.log(`User ${arr[0]} logged in.`);
      break;
    } else if (i === 4) {
      console.log(`User ${arr[0]} blocked!`);
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(["momo", "omom"]);
