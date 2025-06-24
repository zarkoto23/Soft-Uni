const { readFile } = require("../util")
const path=require('path')

function staticFileHandler(req, res){
    if(req.url.endsWith('.css')){
        const filePath = path.join(__dirname, '..', '..', req.url)
        const data=readFile(filePath)
        res.writeHead(200,[
            'content-type','text/css'
        ])
        res.write(data)
        res.end()
        return true
    }else if(req.url.endsWith('.ico')){
 const filePath = path.join(__dirname, '..', '..', req.url)
        const data=readFile(filePath)
        res.writeHead(200,[
            'content-type','image/svg+xml'
        ])
        res.write(data)
        res.end()
        return true

    }
return false

}

module.exports={
    staticFileHandler
}
