function addresBook(arr){
let result={}
for(let info of arr){
  let [name, street]=info.split(':')

  result[name]=street

}
let entr=Object.entries(result)
entr.sort(([keyA,valueA],[keyB, valueB])=>keyA.localeCompare(keyB))

for (let info of entr) {
  console.log(`${info[0]} -> ${info[1]}`);
}
}
addresBook(['Bob:Huxley Rd',
  'John:Milwaukee Crossing',
  'Peter:Fordem Ave',
  'Bob:Redwing Ave',
  'George:Mesta Crossing',
  'Ted:Gateway Way',
  'Bill:Gateway Way',
  'John:Grover Rd',
  'Peter:Huxley Rd',
  'Jeff:Gateway Way',
  'Jeff:Huxley Rd']
  )
 