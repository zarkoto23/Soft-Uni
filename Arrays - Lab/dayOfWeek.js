function dayOfWeek(num){
    let arr=['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday', 'Sunday']

    if(num<=7&&num>=1){
        console.log(arr[num-1])
    }else{
        console.log('Invalid day!')
    }
}dayOfWeek(11)