import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("on / home");
  } else if (req.url === "/create-user") {
    res.write("on create user");
  } else {
    res.write("not found");
  }
  res.end();
});

server.listen(3000);
console.log("server listen on - http://localhost:3000");
