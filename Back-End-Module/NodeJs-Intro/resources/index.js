import http from "http";
import style from "./content/styles/site.css.js";
import homeIndex from "./views/home/index.html.js";
import addBreed from "./views/addBreed.html.js";
import addCat from "./views/addCat.html.js";

  const cats = [
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
    name: "Pretty Kitty",
    breed: "Bombay Cat",
    description:
      "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
  },
  {
    id: 2,
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
    name: "Navcho",
    breed: "Persian Cat",
    description: "A talkative and affectionate cat with striking yellow eyes.",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
    name: "Sisa",
    breed: "Siamese Cat",
    description:
      "Loves to cuddle and nap. Requires regular grooming for its luxurious coat.",
  },
  {
    id: 4,
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
    name: "Garry",
    breed: "Bombay Cat",
    description: "Mysterious and elegant. Often found lounging in sunny spots.",
  },
];

http
  .createServer((req, res) => {
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
  .listen(3000);


  export default cats