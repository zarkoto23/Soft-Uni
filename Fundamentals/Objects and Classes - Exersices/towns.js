function solve(arr){

  for(const item of arr){
    let [town, latitude, longitude]=item.split(' | ')
    latitude=parseFloat(latitude).toFixed(2)
    longitude=parseFloat(longitude).toFixed(2)
    
    let townObj={
      town,
      latitude,
      longitude
    }
    console.log(townObj)

  }

}



solve(['Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625']
  )