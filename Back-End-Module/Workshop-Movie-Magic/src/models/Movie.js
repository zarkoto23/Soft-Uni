import {Schema, model,Types} from "mongoose";

//create schema
const movieSchema=new Schema({
    title:String,
    category:String,
    genre:String,
    director:String,
    year:Number,
    imageUrl:String,
    rating:Number,
    description:String,
    casts:[{
        type:Types.ObjectId,
        ref:'Cast'
    }],
})



//create model
const Movie=model('Movie',movieSchema)

export default Movie