const http=require('http')

const server=http.createServer(()=>{

    console.log('request recieved');
    
})

server.listen(3000)