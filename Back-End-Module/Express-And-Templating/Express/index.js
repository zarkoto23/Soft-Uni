import exepress from "express";

const app = exepress();

app.get("/", (req, res) => {
  res.send("<h1>helloW from sve</h1>");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Meow from cats</h1>");
});

app.listen(3000, () => console.log("hellow from Xpress"));
