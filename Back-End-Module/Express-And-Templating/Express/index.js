import express from "express";
import path from "path";

const app = express();
//aplication middlewara
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

//route middlewara

app.use("/auth", (req, res, next) => {
  if (Math.random() < 0.5) {
    next();
  } else {
    res.status("401").send("Unauthorized");
  }
});

app.get(
  "/users",
  (req, res, next) => {
    if (Math.random() < 0.5) {
      next();
    } else {
      res.send("NO");
    }
  },
  (req, res) => {
    res.send("<h1>USers</h1>");
  }
);

app.get("/", (req, res) => {
  res.send("<h1>helloW from sve</h1>");
});

app.get("/cats/:catId", (req, res) => {
  const catId = req.params.catId;
  res.send(`<h1>cat pAge| ${catId}</h1>`);
});

app.get("/data", (req, res) => {
  res.json({
    name: "pesho",
    grades: [5, 6, 5, 4],
  });
});

app.get("/redirect", (req, res) => {
  if (Math.random() < 0.5) {
    res.redirect("/");
  } else {
    res.redirect("/404");
  }
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

app.get("/auth/profile", (req, res) => {
  res.send("laplap");
});

app.get("/cats*", (req, res) => {
  res.send("<h1>Meow from cats</h1>");
});

app.all("*", (req, res) => {
  res.send("<h1>Not found _|_</h1>");
});

app.listen(3000, () => console.log("hellow from Xpress"));
