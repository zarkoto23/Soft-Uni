import express from "express";
import handlebars from "express-handlebars"

import routes from "./routes.js";

const app = express();

//handlebars setup
app.engine('hbs',handlebars.engine)

app.set('view engine','hbs')
app.set('views','./src/views')
  




//exp setup
app.use(express.static('src/public'))
app.use(express.urlencoded({extended:false}))
app.use(routes)





app.listen(3000, () =>
  console.log("server is listen on http://localhost:3000")
);
