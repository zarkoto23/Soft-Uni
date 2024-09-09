function solve(json){

  let obj=JSON.parse(json)
  let a=Object.entries(obj)

  for (const tuple of a) {
    console.log(tuple[0],':',tuple[1])
  }
  

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')