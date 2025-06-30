import { Router } from "express";
import movieService from "../services/movieService.js";

const movieControllerRouter=Router()



movieControllerRouter.get('/create',(req,res)=>{
    res.render('create')
})


movieControllerRouter.get('/:movieId/details',(req, res)=>{
    const movieId=req.params.movieId
    const movie=movieService.findOne(movieId)
console.log(movie);


    res.render('details')
})



export default movieControllerRouter