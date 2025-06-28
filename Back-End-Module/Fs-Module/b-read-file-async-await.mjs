import fs from "fs/promises";

//async file reading with promises (async/await syntax)

try{const loremntext=await fs.readFile("./input.html", { encoding: "utf-8" })

console.log(loremntext);
console.log("\n                                   READED!");



}catch(err){
  console.log(err.message);
  
}



