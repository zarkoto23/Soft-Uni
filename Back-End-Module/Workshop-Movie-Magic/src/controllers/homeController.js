import { Router } from "express";
import movieService from "../services/movieService.js";

const routes = Router();

routes.get("/", async (req, res) => {
  const movies = await movieService.getAll()
  //1convert to doc to plain obj
  //2useLean
  //use aloowprototypesbydefauls runtime option in handlebarsk config
  // const plainMovies=movies.map(movie=>movie.toObject())

  //



  res.render("home", { movies });
});
//

routes.get("/about", (req, res) => {
  res.render("about");
});

export default routes;
