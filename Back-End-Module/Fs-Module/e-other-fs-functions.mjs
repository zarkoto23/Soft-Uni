import fs from 'fs/promises'

//read dorectory files
console.log(await fs.readdir('.'));

//create new directory
// await fs.mkdir('./test-dir')

//remove dir
// await fs.rmdir('./test-dir2')

//rename dir or file
// await fs.rename('./test-dir', './test-dir2')

//unlink = delete file/remove file
// await fs.unlink('./some.txt')


