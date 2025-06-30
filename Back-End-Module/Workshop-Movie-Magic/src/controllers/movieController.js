import { Router } from "express";

const movieControllerRouter=Router()

movieControllerRouter.get('/create',(req,res)=>{
    res.render('create')
})


movieControllerRouter.get('/:movieId/details',(req, res)=>{
    res.render('details')
})
export default movieControllerRouter