function oddEvenSum(num){
  let numToStr=String(num)
  let odd=0
  let even=0
  for(let i=0;i<numToStr.length;i++){
    let numTwo=Number(numToStr[i])
    if(numTwo%2===0){
      even+=numTwo
    }else{
      odd+=numTwo
    }
    
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`)

}
oddEvenSum(1000435)