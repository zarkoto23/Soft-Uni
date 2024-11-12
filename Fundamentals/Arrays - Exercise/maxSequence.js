function asd(arr){
    arr=arr.map(Number)
    let max=[]
    let current=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            current.push(arr[i])
            if(max.length<current.length){
                max=current
            }
        }else{
            current=[]
        }
    }
    max.push(max[0])
    console.log(max.join(' '))
}
asd([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])