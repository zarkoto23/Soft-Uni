import fs from 'fs'


//lorem with callback 


fs.readFile('./input.html',{encoding:'utf-8'},(err,loremText)=>{

    if(err){
        return console.error(err.message)
    }
console.log(loremText);
console.log("\n                                   READED!");


})

