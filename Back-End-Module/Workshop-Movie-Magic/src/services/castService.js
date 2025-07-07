import castController from "../controllers/castController.js"
import Cast from "../models/Cast.js"


export default {

    getAll(){
        return Cast.find({})
    },

    create(castData){
        //TODO
        return Cast.create(castData)

        
    }
}