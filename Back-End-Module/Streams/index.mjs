import {createReadStream} from 'fs'

const readStream=createReadStream('./input.txt')

readStream.on('data',(chunk)=>{
    console.log(chunk);
    
})