function solve(str){
let splited=str.split(' ')
for( let word of splited){
  if(word.length>1&&word[0]==='#'){
    const regex = /[^a-zA-Z]/;
    let result=word.substring(1)
    
  if(!regex.test(result)){
    console.log(result)

  }

  }
}
}
solve('The symbol # is known #variously in English-speaking #r1egi3ons as the #number sign')