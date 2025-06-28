import http from "http";
import {v4 as uuid} from 'uuid'
import fs from 'fs/promises'


import style from "./content/styles/site.css.js";
import homeIndex from "./views/home/index.html.js";
import addBreed from "./views/addBreed.html.js";
import addCat from "./views/addCat.html.js";


let cats=[]

 initCats()

const server=http
  .createServer((req, res) => {

 

    if(req.method==='POST'){
      let body=''
          req.on('data',chunk=>{
            
            body+=chunk.toString()
            
          })    
          req.on('end',()=>{
          
            const data=new URLSearchParams(body)

            cats.push({
              // id: cats.length+1,
              id:uuid(),
              ...Object.fromEntries(data.entries())
            })

            saveCats()


            res.writeHead(302, {
              'location':'/'
            })
            res.end()
          })
          return
    }


    if (req.url.endsWith(".css")) {
      res.writeHead(200, ["content-type", "text/css"]);

      res.write(style);
      return res.end();
    } else if (req.url == "/cats/add-breed") {
      res.writeHead(200, ["content-type", "text/html"]);
      res.write(addBreed);
      return res.end();
    } else if (req.url == "/") {
      res.writeHead(200, ["content-type", "text/html"]);
      res.write(homeIndex(cats));
      return res.end();
    } else if (req.url == "/cats/add-cat") {
      res.writeHead(200, ["content-type", "text/html"]);
      res.write(addCat);
      return res.end();
    }

    res.write("KON");
    res.end();
  })


     async function initCats(){

      const catJson=await fs.readFile('./cats.json',{encoding:'utf-8'})
      cats=JSON.parse(catJson)
}

async function saveCats(){
  const catJson=JSON.stringify(cats,null, 2)
  await fs.writeFile('./cats.json',catJson,{encoding:'utf-8'})
}

  server.listen(3000);
  console.log('server listen!');
  


  export default cats