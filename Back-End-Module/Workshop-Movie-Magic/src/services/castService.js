import castController from "../controllers/castController.js"
import Cast from "../models/Cast.js"


export default {

    getAll(filter={}){
        let query=Cast.find({})

        if(filter.exclude){
            query=query.find({_id:{$nin: filter.exclude}})
        }
        return query
    },

    create(castData){
        //TODO
        return Cast.create(castData)

        
    }
}