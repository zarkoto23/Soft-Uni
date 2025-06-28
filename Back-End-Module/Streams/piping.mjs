import fs from "fs";

const readStream = fs.createReadStream("./input.txt",{encoding:'utf-8',higwhWaterMark:1000});

const writeStream = fs.createWriteStream("./input-copy.txt", {encoding:'utf-8', flags: "a" });


readStream.pipe(writeStream)