function asd(start, end) {
  let total = 0;
  let result = "";
  for (let i = start; i <= end; i++) {
    total += i;
    result += `${i} `;
  }
  console.log(result);
  console.log(`Sum: ${total}`);
}
asd(0, 26);
