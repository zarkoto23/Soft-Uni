import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routes from "./routes.js";
import { auth } from "./middlewares/authMiddleware.js";

const app = express();

//DB setup
try {
  const uri = "mongodb://localhost:27017/data";
  mongoose.connect(uri);
  console.log("connect to DB");
} catch (error) {
  console.log("NOT connect to DB");
  console.log(error.message);
}

//handlebars setup
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

//exp setup
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

app.listen(3000, () =>
  console.log("server is listen on http://localhost:3000")
);
