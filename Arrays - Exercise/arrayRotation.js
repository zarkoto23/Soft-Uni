function rotation(arr, rotations) {
    let rot = rotations % arr.length;
 
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[(rot + index) % arr.length]);
    }
    console.log(newArr.join(' '));
}

rotation([32, 21, 61, 1], 4);
