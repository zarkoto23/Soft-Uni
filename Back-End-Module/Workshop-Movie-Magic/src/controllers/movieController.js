import { Router } from "express";
import movieService from "../services/movieService.js";

const movieControllerRouter=Router()

movieControllerRouter.get('/search',(req, res)=>{

    const movies=movieService.getAll()
    res.render('search',{movies})
})



movieControllerRouter.get('/create',(req,res)=>{
    res.render('create')
})

movieControllerRouter.post('/create',(req, res)=>{
    const newMovie=req.body

    movieService.create(newMovie)

    res.redirect('/')
    
})


movieControllerRouter.get('/:movieId/details',(req, res)=>{
    const movieId=req.params.movieId
    const movie=movieService.findOne(movieId)

    res.render('details',{movie})
})



export default movieControllerRouter