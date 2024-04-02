function asd(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let b = 1; b <= i; b++) {
      result += `${i} `;
    }
    console.log(result);
    result = "";
  }
}
asd(5);
