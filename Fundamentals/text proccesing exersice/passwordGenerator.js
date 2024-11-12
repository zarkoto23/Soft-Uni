function solve(str){
  let [first, second, third]=str
  let uP=third.toUpperCase()
  let vowels = ['a', 'o', 'u', 'e', 'i'];
  let concat=(first+second)
  let idx=0
let replaced;

  for(let i=0;i<concat.length;i++){
    if(vowels.includes(concat[i])){
    replaced=concat.replace(concat[i], uP[idx])
    idx++
    }
  if(idx===vowels.length){
    idx=0
  }
  }
console.log(replaced)

}
solve([
  'ilovepizza', 'ihatevegetables',
  'orange'
  ]
  
  )