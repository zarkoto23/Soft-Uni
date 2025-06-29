import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>helloW from sve</h1>");
});

app.get("/cats/:catId", (req, res) => {
  const catId = req.params.catId;
  res.send(`<h1>cat pAge| ${catId}</h1>`);
});

// app.get("/download", (req, res) => {
//   res.download("./cattt.jpg");
// });

// app.get("/download2", (req, res) => {
//   res.sendFile(path.resolve("./cattt.jpg"), {
//     headers: {
//       "content-disposition": "attachment",
//     },
//   });
// });

// app.get("/download3", (req, res) => {
//   res.attachment("./cattt.jpg");
//   res.end();
// });

app.get("/cats*", (req, res) => {
  res.send("<h1>Meow from cats</h1>");
});

app.all("*", (req, res) => {
  res.send("<h1>Not found _|_</h1>");
});

app.listen(3000, () => console.log("hellow from Xpress"));
