// import movies from "../movies.js";
// import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
  async getOne(movieId) {
    const result = await Movie.findById(movieId);

    return result;
  },
async getOneWithCasts(movieId) {
  const movie = await this.getOne(movieId);
  return movie.populate('casts');
},

  create(movieData) {
    const result=Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year:Number(movieData.year)
    });

      return result
  },

   getAll(filter = {}) {
    let query =  Movie.find({})


    if (filter.search) {
      query = query.where({title: filter.search}) //TODO: create partial search case insensitive
    }

    if (filter.genre) {
      query = query.where({genre: filter.genre})//TODO: add case insesituve
    }

    if (filter.year) {
      query = query.where({year: Number(filter.year)});
    }

    return query
  },

  async attachCast(movieId,castId){
    //1st way
    console.log(movieId, castId);
    
     const movie=await Movie.findById(movieId)
     movie.casts.push(castId)
     await movie.save()

     return movie

    //2nd way
  }
};
