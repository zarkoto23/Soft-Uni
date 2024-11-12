function asd(num) {
  let str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  let result=sum.toString().includes('9')
  console.log(result? `${num} Amazing? True`:`${num} Amazing? False`)
}
asd(1233);
