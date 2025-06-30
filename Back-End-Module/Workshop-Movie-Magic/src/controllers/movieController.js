import { Router } from "express";

const movieControllerRouter=Router()

movieControllerRouter.get('/create',(req,res)=>{
    res.render('create')
})


export default movieControllerRouter