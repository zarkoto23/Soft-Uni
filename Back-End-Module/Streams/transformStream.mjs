// import fs from "fs";
// import zlib from 'zlib'

// const readStream = fs.createReadStream("./input.txt",{encoding:'utf-8',higwhWaterMark:1000});

// const writeStream = fs.createWriteStream("./input-copyZip.txt", {encoding:'utf-8', flags: "a" });

// const gzip= zlib.createGzip()

//  readStream.pipe(gzip).pipe(writeStream)



import fs from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream('./input-copyZip.txt');
const writeStream = fs.createWriteStream('./input-copyUnsip.txt');

const gunzip = zlib.createGunzip();

readStream.pipe(gunzip).pipe(writeStream);

gunzip.on('end', () => {
    console.log('Разархивирането приключи.');
});

gunzip.on('error', (err) => {
    console.error('Грешка при разархивиране:', err.message);
});

