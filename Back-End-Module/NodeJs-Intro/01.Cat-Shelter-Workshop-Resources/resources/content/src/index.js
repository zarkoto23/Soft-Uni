const http = require("http");
const { homeHandler } = require("./handlers/home");

const routes={
    '/':homeHandler,
    'index.html':homeHandler
}



http
  .createServer((req, res) => {
    const route=routes[req.url]
    if (typeof route==='function') {
      homeHandler(req, res)
    } else {
      res.writeHead(404,[
        'content-type','text/plain'
      ])
      res.write('404 not Fount')
      res.end()
    }
  })
  .listen(3000);
