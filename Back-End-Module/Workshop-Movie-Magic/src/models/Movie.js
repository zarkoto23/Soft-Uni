import { Schema, model, Types } from "mongoose";

//create schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: 5,
    match: [/^[a-zA-Z0-9]+$/, "Title shoudl be alphanum, and spaces only"],
  },
  category: {
    type: String,
    required:true,
    enum: ["tv-show", "animation", "movie", "documentary", "short-film"],
  },
  genre: {
    type: String,
    required: [true, "genre is required!"],
    minLength: 5,
    match: [/^[a-zA-Z0-9]+$/, "genre shoudl be alphanum, and spaces only"],
  },
  director: {
    type: String,
    required: [true, "director is required!"],
    minLength: 5,
    match: [/^[a-zA-Z0-9]+$/, "director shoudl be alphanum, and spaces only"],
  },
  year: {
    type: Number,
    min: 1900,
    max: 2025,
  },
  imageUrl: {
    type: String,
    match: /https?:\/\//,
  },
  rating: {
    type: Number,
    default:1,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
    minLength: 20,
    match: /^[a-zA-Z0-9]+$/,
  },
  casts: [
    {
      type: Types.ObjectId,
      ref: "Cast",
    },
  ],
  creator: {
    type: Types.ObjectId,
    ref: "User",
  },
});

//create model
const Movie = model("Movie", movieSchema);

export default Movie;
