import express from 'express'

const app=express()

app.get('/',(req, res)=>{
    res.send('itWorks')
})


app.listen(3000,() =>{console.log('listen on http://localhost:3000')});
