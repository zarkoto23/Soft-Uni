import { createWriteStream } from "fs";


const writeStream=createWriteStream('./output.txt',{encoding: 'utf-8',flags:'a'})
writeStream.write(`sdfhsdfhsddf
gfgsdfgsdfgsdfgsdfgsdfgsdfgdfgGGGGGGGGGG
sdfhgsdfg`)

writeStream.write(`sdfhsdfhsddf`)

writeStream.write('\n=============\n')



writeStream.end()