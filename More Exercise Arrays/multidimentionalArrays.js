function asd(arr){
  if((arr[0][0]+arr[0][1]+arr[0][2]===arr[1][0]+arr[1][1]+arr[1][2]&&arr[1][0]+arr[1][1]+arr[1][2]===arr[2][0]+arr[2][1]+arr[2][2])&&
  arr[0][0]+arr[1][0]+arr[2][0]===arr[0][1]+arr[1][1]+arr[2][1]&&arr[0][2]+arr[1][2]+arr[2][2]===arr[0][1]+arr[1][1]+arr[2][1]){
    console.log(true)
  }else{
    console.log(false)
  }
}

asd([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   )
