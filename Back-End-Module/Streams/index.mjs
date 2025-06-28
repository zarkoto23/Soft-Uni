import { log } from 'console'
import {createReadStream} from 'fs'
    let count=0


const readStream=createReadStream('./pic.png')

readStream.on('data',(chunk)=>{
    count+=1
    
    
    console.log(chunk);
    
})

readStream.on('end',()=>{
    console.log('EndeD');
    console.log(count);

    
})