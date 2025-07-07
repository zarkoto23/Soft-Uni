import express from "express";
import handlebars from "express-handlebars";
import mongoose, { mongo } from 'mongoose'

import routes from "../routes.js";
import showRating from "./helpers/ratingHelper.js";

const app = express();

//Db config
try{
  const uri='mongodb://localhost:27017/magic-movies'
  await mongoose.connect(uri)
  console.log('conected success on DB');
  
}catch(err){
  console.log('cannot conect to DB');
  
  console.log(err.message);
  
   
}


//handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions:{
      allowProtoPropertiesByDefault:true,
    },
    helpers: {
      showRating,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");


//express config
app.use("/static", express.static("src/public"));
app.use(express.urlencoded({ extended: false })); //learn xpres to parse form data
//



//rouutes
app.use(routes); /////

//

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
