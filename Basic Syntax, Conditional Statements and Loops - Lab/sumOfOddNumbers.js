function asd(num){
    let total=0
    let counter=0
    for(let i=1;i<=100;i++){
        if(i%2!==0){
            console.log(i)
            total+=i
            counter+=1
        }
        if(counter===num){
            break
        }
    }
    console.log(`Sum: ${total}`)
}
asd(3)