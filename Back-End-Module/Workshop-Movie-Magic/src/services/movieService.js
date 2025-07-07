// import movies from "../movies.js";
// import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
  async getOne(movieId) {
    const result = await Movie.findById(movieId);

    return result;
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
};
