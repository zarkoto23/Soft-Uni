function loading(num){
  let a=num/10
  let result=''
  let resultTwo=''
if(a<10){
  for(let i=0;i<a;i++){
   result+='%'
  }
  for(let j=10-a;j>0;j--){
    resultTwo+='.'
  }
  console.log(`${num}% [${result}${resultTwo}]`)
  console.log('Still loading...')
}else{
  console.log('100% Complete!')
  console.log('[%%%%%%%%%%]')
}

}
loading(100)