function subtract() {
    const [num1,num2,sum]=[
      Number(document.querySelector('#firstNumber').value),
      Number(document.querySelector('#secondNumber').value),
      document.querySelector('#result')
  ];

  sum.textContent=num1-num2
  console.log(num1,num2,sum)
}