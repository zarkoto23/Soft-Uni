import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieControllerRouter = Router();

movieControllerRouter.get("/search", async (req, res) => {
  const filter = req.query;

  const movies = await movieService.getAll(filter);
  res.render("search", { movies, filter });
});

movieControllerRouter.get("/create",isAuth,  (req, res) => {
  res.render("create");
});

movieControllerRouter.post("/create", async (req, res) => {
  const newMovie = req.body;

  const userId = req.user?.id;

  await movieService.create(newMovie, userId);

  res.redirect("/");
});

movieControllerRouter.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOneWithCasts(movieId);

  // const casts=castService.getAll(movie.casts)
  const isCreator = movie.creator && movie.creator?.equals(req.user?.id);

  res.render("movie/details", { movie, isCreator });
});

movieControllerRouter.get("/:movieId/attach-cast",isAuth, async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);
  const casts = await castService.getAll({ exclude: movie.casts });

  res.render("movie/attach-cast", { movie, casts });
});

movieControllerRouter.post("/:movieId/attach-cast", isAuth,async (req, res) => {
  const castId = req.body.cast;
  const movieId = req.params.movieId;
  await movieService.attachCast(movieId, castId);
  res.redirect(`/movies/${movieId}/details`);
});

movieControllerRouter.get("/:movieId/delete",isAuth,async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);

  if (!movie.creator?.equals(req.user?.id)) {
    return res.render("/404");
  }

  await movieService.delete(movieId);
  res.redirect("/");
});


function getCategoriesViewData(category){

    let categoriesMap = {
    "tv-show":"TV Show", 
    "animation":"Animation", 
    "movie":"Movie",
    "documentary":"Documentary" ,
    "short-film":"Short Film" 
    };

    const categories=Object.keys(categoriesMap).map(categoryValue=>({
      value:categoryValue,
      label: categoriesMap[categoryValue],
      selected:categoryValue===category? 'selected':''
    }))

    return categories

}


movieControllerRouter.get("/:movieId/edit",isAuth, async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);

  const categories=getCategoriesViewData(movie.category)



  res.render("movie/edit", { movie ,categories});
});

movieControllerRouter.post('/:movieId/edit',isAuth,async(req,res)=>{
  const movieData=req.body
  const movieId=req.params.movieId

  //


  await movieService.update(movieId, movieData)

  res.redirect(`/movies/${movieId}/details`)

})

export default movieControllerRouter;
