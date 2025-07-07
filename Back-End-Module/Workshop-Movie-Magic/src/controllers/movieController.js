import { Router } from "express";
import movieService from "../services/movieService.js";

const movieControllerRouter = Router();

movieControllerRouter.get("/search", async ( req, res) => {
  const filter = req.query;

  const movies =await movieService.getAll(filter);
  res.render("search", { movies, filter });
});

movieControllerRouter.get("/create", (req, res) => {
  res.render("create");
});

movieControllerRouter.post("/create", async (req, res) => {
  const newMovie = req.body;

 await movieService.create(newMovie);

  res.redirect("/");
});

movieControllerRouter.get("/:movieId/details",async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);

  res.render("details", { movie });
});

export default movieControllerRouter;
