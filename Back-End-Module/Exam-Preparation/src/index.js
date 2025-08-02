import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'

import routes from './routes.js'

const app=express()

//db setup
try {
    const uri='mongodb://localhost:27017/data'
    await mongoose.connect(uri)
    console.log('connect do DB SUCCESS');
    
} catch (error) {
    console.log(error.message);
    console.error('CANNOT connect to DB')
    
}

//handlebars setup
app.engine('hbs', handlebars.engine({
    extname:'hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault:true,
    }
}))
app.set('view engine','hbs')
app.set('views','./src/views')


//express setup
app.use(express.static('src/public'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(routes)





app.listen(3000, ()=>console.log('server listner on http://localhost:3000'))