import express from 'express'
import cookieParser from 'cookie-parser'
import bycript from 'bcrypt'
import jwt from 'jsonwebtoken'

import expressSession from 'express-session'

const app=express()
app.use(express.urlencoded({extended:false}))

app.use(cookieParser()) 
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:true,
    cookie: {
        secure:false
    }

}))

app.get('/',(req, res)=>{

    res.send('work!')
})


// app.get('/set',(req, res)=>{
    // http method
    // res.writeHead(200,{ "Set-Cookie": 'username=Pesho'})
    // res.end()


    // res.setHeader(200, {

    // })



//     res.setHeader('Set-Cookie', 'username=gosho')
//     res.end()
// })

// app.get('/getcookie',(req, res)=>{
//     const cookie=req.header('Cookie')
//     console.log(cookie);
//     res.end()
    
// })


app.get('/sett',(req, res)=>{
    res.cookie('username', 'Stamat',{
        httpOnly:true
    })
    res.end()
})

app.get('/gett',(req, res)=>{
    const cookie=req.cookies['username']
    console.log(cookie);
    
    res.end()
})


app.get('/set-session-data/:name',(req, res)=>{
    req.session.name=req.params.name
    req.session.age='20'

    res.end()
})
//

app.get('/get-session-data',(req, res)=>{
    console.log(req.session.name);

      res.send(req.session.name)
})


// app.get('/getdata',(req, res)=>{
//     console.log(req.session);
//     res.send(req.session.name)
    
// })



//B-crypt demo
app.get('/get-hash/:message',async(req, res)=>{
    const message=req.params.message

    const salt=  await bycript.genSalt(10)
    const hash=await bycript.hash(message, salt)

    res.send(hash)
})


app.get('/chek-hash/:message',async(req, res)=>{
    const message=req.params.message
const savedHash='$2b$10$oG2lBfuWgN9UswJX9hpYoeZyiU1JeusZsue.Nx2rZDeJyt1lrHap.'

const isValid=await bycript.compare(message, savedHash)
res.send(isValid)


})

const secret='secret'

app.get('/generate-jwt/:msg', (req, res)=>{
    const msg=req.params.msg

    const payload={
        user:'Pesho',
        age:20,
        msg
    }

    const token=jwt.sign(payload,secret,{expiresIn: '2h'} )


    res.send(token)

})
 
app.get('/vrify/:token',(req, res)=>{
    const token =req.params.token
    const decoded=jwt.verify(token, secret)
    console.log(decoded);
    
    res.send(decoded)
})


//basic login system

const users=[]
app.get('/register',(req, res)=>{
res.send(`<form method="POST">
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </div>

    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <input type="submit" value="Register">
    </div>
</form>`)
})

app.post('/register',async(req, res)=>{
    const {username, password}=req.body

    //hashPass
     const salt=await bycript.genSalt(10)
     const hash=await bycript.hash(password, salt)

    //saevUsrData
    users.push({
        username,
        password:hash
    })
    console.log(users);
    

    res.redirect('/login')

})

app.get('/login',(req, res)=>{


    res.send(`<form method="POST">
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </div>

    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <input type="submit" value="Login">
    </div>
</form>`)

})

app.post('/login',async(req, res)=>{
    const {username, password}=req.body

    //chek 
    const user=users.find(u=>u.username===username)
    if(!user){
        return res.send('invalid user')
    }

    //chek pass
    const isValid=await bycript.compare(password, user.password)
    if(!isValid){
        return res.send('invalid Pass')
    }

    //issue token when auth is valid
    const token=jwt.sign({username},secret,{expiresIn:'2h'})
    //include token into cookie
    res.cookie('auth', token)

    res.send('valid pass')


})

//authorized

app.get('/profile',async(req, res)=>{
    const token=req.cookies['auth']
    if(!token){
        return res.status(401).send('Unauthorized')
    }
    try{
    const decodedToken=jwt.verify(token, secret)
    res.send('bravo')
    }catch(err){
        return res.status(401).send('Unauthorized2')

    }
})



app.listen(3000,()=>console.log('server listen!'))