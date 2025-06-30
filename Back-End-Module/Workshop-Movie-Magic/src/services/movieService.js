import movies from "../movies.js";

 function findOne(movieId){
const result=movies.find(movie=>movie.id==movieId)
return result
}


export default {
   findOne

}
