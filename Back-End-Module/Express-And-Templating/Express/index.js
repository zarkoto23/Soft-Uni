import exepress from 'express'

const server=exepress()

server.get('/', (req, res)=>{
    console.log('request---');


    res.send('<h1>helloW from sve</h1>')

    
    
})


server.listen(3000)
console.log('Listening on http://localhost:3000');
