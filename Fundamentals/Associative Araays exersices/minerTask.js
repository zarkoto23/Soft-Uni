function miner(arr){
  let result={}
  for(let i=0;i<arr.length;i+=2){
    const[metal, pcs]=[arr[i],Number(arr[i+1])]
    if(!result[metal]){
      result[metal]=pcs
    }else{
      result[metal]+=pcs
    }

  }
  for(let a in result){
  console.log(`${a} -> ${result[a]}`)
  }
}
miner([
  'gold',
  '155',
  'silver',
  '10',
  'copper',
  '17',
  'gold',
  '15'
  ]
  )