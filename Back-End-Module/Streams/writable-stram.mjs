import { createWriteStream } from "fs";


const writeStream=createWriteStream('./output.txt',{flags:'a'})
writeStream.write(`sdfhsdfhsddf
gfgsdfgsdfgsdfgsdfgsdfgsdfgdfgGGGGGGGGGG
sdfhgsdfg`)

writeStream.write(`sdfhsdfhsddf`)

writeStream.write('\n=============\n')



writeStream.end()