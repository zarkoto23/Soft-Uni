function asd(arr){
    let newArr=[]
    let counter=1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='add'){
            newArr.push(counter)
            counter++
        }else{
            newArr.pop(counter)
            counter++
        }
}
        if(newArr[0]===undefined){
            console.log('Empty')
        }else{
            console.log(newArr.join(' '))
        }
}
asd(['remove', 'remove', 'remove'])