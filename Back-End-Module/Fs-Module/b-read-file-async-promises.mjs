import fs from "fs/promises";

//async file reading with promises (promise then syntax)

fs.readFile("./input.html", { encoding: "utf-8" })
  .then((loremText) => {
    console.log(loremText);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("\n                                   READED!");
