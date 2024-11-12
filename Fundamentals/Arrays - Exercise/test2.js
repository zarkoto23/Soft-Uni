function rotation(arr, rotations){
    let rot=Math.abs(arr.length-rotations)
    let newArr=[]
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[rot+index])
        
        
    }
    console.log(newArr)
    }
    rotation([2, 4, 15, 31], 5)
    