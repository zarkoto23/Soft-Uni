function asd(arr){
    let num=arr[arr.length-1]
    let newArr=[]
    newArr.push(arr[0])


    for(let i=1;i<arr.length-1;i++){
        if(i%num===0){
            newArr.push(arr[i])
        }

    }

    console.log(newArr.join(' '))
}

asd(['dsa', 'asd', 'test', 'test', '2'])