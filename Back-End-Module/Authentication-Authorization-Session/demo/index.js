import express from 'express'

const app=express()

app.get('/',(req, res)=>{
    res.send('work!')
})


app.get('/set',(req, res)=>{
    // http method
    // res.writeHead(200,{ "Set-Cookie": 'username=Pesho'})
    // res.end()


    // res.setHeader(200, {

    // })



    res.setHeader('Set-Cookie', 'username=gosho')
    res.end()
})

app.get('/getcookie',(req, res)=>{
    const cookie=req.header('Cookie')
    console.log(cookie);
    res.end()
    
})



app.listen(3000,()=>console.log('server listen!'))