function rotate(arr) {
  let rotation = Number(arr.pop())
    for(let i=0;i<rotation;i++){
        let a=arr.pop()
        arr.unshift(a)  
    }
    console.log(arr.join(' '))
}
//rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

rotate(['1', '2', '3', '4', '2'])
