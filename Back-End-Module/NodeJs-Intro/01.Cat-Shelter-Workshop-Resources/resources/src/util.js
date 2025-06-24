const fs = require('fs')

function readFile(filePath) {
    const data = fs.readFileSync(filePath) // filePath трябва да е абсолютен
    return data.toString()
}

module.exports = {
    readFile
}
