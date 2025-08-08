import User from "../models/User.js"

const register=(userdata)=>{


    return User.create(userdata)
}


const authService={
    register, 
}

export default authService