import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine("handlebars", handlebars.engine());

app.get("/", (req, res) => {
  res.send("it WORK");
});

app.listen(3000, () => console.log("listen on http://localhost3000"));
