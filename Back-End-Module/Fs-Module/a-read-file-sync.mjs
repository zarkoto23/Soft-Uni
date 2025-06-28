import { log } from 'console';
import fs from 'fs'

const loremText=fs.readFileSync('./input.html',{encoding:'utf-8'})
console.log(loremText);

console.log("\n                                   READED!");
