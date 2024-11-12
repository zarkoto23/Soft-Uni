function phone(arr){
  let phoneBook={}

  for (let details of arr){
    let [person,number]=details.split(' ')
    phoneBook[person]=number
  }

  for (let info in phoneBook){
    console.log(`${info} -> ${phoneBook[info]}`)
  }

  
}

phone(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']
 )