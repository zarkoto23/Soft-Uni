function orders(ord, pieces){

  const coffee = 1.50
 const  water = 1.00
  const coke = 1.40
  const snacks = 2.00

  switch(ord){
    case 'coffee':
      console.log((pieces*coffee).toFixed(2))
      break
    case 'water':
      console.log((pieces*water).toFixed(2))
      break
    case 'coke':
      console.log((pieces*coke).toFixed(2))
      break
    case 'snacks':
      console.log((pieces*snacks).toFixed(2))
    break
  }



}