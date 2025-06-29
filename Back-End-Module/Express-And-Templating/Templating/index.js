import express from "express";
import handlebars from "express-handlebars";
import cats from "./cats.js";

const app = express();

//add handlebars engine to xpress engines
app.engine("hbs", handlebars.engine({
    extname:'hbs'
}));

//set default engine
app.set("view engine", "hbs");
//

app.get("/", (req, res) => {
  res.render("home",{cats});
});

app.get('/add-cat',(req, res)=>{
    res.render('addCat',{layout:'secondary'})
})

app.get('/add-breed',(req, res)=>{
    res.render('addBreed')
})

app.listen(3000, () => console.log("listen on http://localhost3000"));
