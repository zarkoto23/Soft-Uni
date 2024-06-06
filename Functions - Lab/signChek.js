function chekSign(numOne, numTwo, numThree){
  let arr=[numOne, numTwo, numThree]
  let negatives=0
  for (item of arr){
    if(item<0){
      negatives+=1
    }
  }
  if (negatives%2===0){
    console.log('Positive')
  }else{
    console.log('Negative')
  }

}

chekSign(-1,
  -2,
  -3
  

 )