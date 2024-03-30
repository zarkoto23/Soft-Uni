function asd(input){
let oneBit=11949.16
let oneGramGold=67.51

let gramsToMoney=0

let firstBit=0
let moneyLeft=0
let bitCoinCount=0
let gramsMiningDay=0
for (let i=0;i<=input.length-1;i++){
    gramsMiningDay=Number(input[i])

    if((i+1)%3===0){
        gramsMiningDay*=0.7
    }
    gramsToMoney+=gramsMiningDay*67.51


    if(gramsToMoney>=11949.16){
        bitCoinCount+=gramsToMoney%11949.16
        console.log(bitCoinCount)
        bitCoinCount+=1
        gramsToMoney-=bitCoinCount*11949.16
    }
    if(bitCoinCount===1){
        firstBit=i+1
    }





}
console.log(bitCoinCount)
if(bitCoinCount>=1){
    console.log(firstBit)
}
console.log(gramsToMoney)


}

asd(
    [3124.15, 504.212, 2511.124])
