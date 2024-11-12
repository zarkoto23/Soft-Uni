function repeat(str, repeatings){
  let result=''
  for(let i=0;i<repeatings;i++){
    result+=str
  }
  return result
  
}

repeat("abc", 3)