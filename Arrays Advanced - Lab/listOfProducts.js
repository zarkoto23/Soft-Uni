function listOfOProducts(arr){
let resultArr=arr.sort()


for (let i=0;i<resultArr.length;i++){
  console.log(`${i+1}.${resultArr[i]}`)
}


}

listOfOProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])