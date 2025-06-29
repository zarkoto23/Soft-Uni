import exepress from 'express'

const server=exepress()

server.get('/', (req, res)=>{
    console.log('request---');


    res.write('hello maaf')

    res.end()

    
    
})


server.listen(3000)
console.log('Listening on http://localhost:3000');
