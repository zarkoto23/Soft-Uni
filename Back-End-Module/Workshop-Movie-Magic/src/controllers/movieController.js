import { Router } from "express";
import movieService from "../services/movieService.js";

const movieControllerRouter=Router()



movieControllerRouter.get('/create',(req,res)=>{
    res.render('create')
})

movieControllerRouter.post('/create',(req, res)=>{
    console.log(req.body);
    res.end()
    
})


movieControllerRouter.get('/:movieId/details',(req, res)=>{
    const movieId=req.params.movieId
    const movie=movieService.findOne(movieId)

    res.render('details',{movie})
})



export default movieControllerRouter