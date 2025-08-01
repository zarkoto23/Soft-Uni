import express from 'express'
import handlebars from 'express-handlebars'

import routes from './routes.js'

const app=express()

//handlebars setup
app.engine('hbs', handlebars.engine({
    extname:'hbs',
}))
app.set('view engine','hbs')


//express setup
app.use(express.static('src/public'))
app.use(express.urlencoded({extended:false}))
app.use(routes)





app.listen(3000, ()=>console.log('server listner on http://localhost:3000'))