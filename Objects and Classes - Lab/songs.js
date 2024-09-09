function solve(arr){
let num=arr.shift()
let list=arr.pop()

for(let i=0;i<num;i++){
  let [playList, song]=arr[i].split('_')

  if(playList===list){
    console.log(song)
  }
  if(list==='all')
    console.log(song)
}


}


solve([3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']
  
  
  )