import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("it works!");
});

app.listen(3000, () =>
  console.log("server is listen on http://localhost:3000")
);
