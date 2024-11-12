function solve(arr){
  let employes=[]

  for(let employ of arr){
    let len=employ.length

    let info={
      name: employ,
      letters: len
    }
    employes.push(info)
  }
  for(emplObj of employes){
    console.log(`Name: ${emplObj.name} -- Personal Number: ${emplObj.letters}`)
  }
}

solve([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]
  )