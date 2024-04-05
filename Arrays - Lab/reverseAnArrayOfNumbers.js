function reverseArray(num, arr){
    let newArr=arr.slice(0, num)
    newArr.reverse()
    let result=newArr.join(' ')
    console.log(result)
}
reverseArray(3, [10, 20, 30, 40, 50])