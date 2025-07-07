import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

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
  const movie = await movieService.getOneWithCasts(movieId);
  
  // const casts=castService.getAll(movie.casts)

  res.render("movie/details", { movie,  });
});

movieControllerRouter.get('/:movieId/attach-cast',async(req, res)=>{
  const movieId=req.params.movieId
  const movie = await movieService.getOne(movieId)
  const casts= await castService.getAll({exclude:movie.casts})

  res.render('movie/attach-cast',{movie,casts})
})


movieControllerRouter.post('/:movieId/attach-cast', async(req,res)=>{
  const castId=req.body.cast
  const movieId=req.params.movieId
  await movieService.attachCast(movieId, castId)
  res.redirect(`/movies/${movieId}/details`)
})

export default movieControllerRouter;
