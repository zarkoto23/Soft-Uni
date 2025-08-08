import User from "../models/User.js"

const register=async (userData)=>{
    if(userData.password!==userData.confirmPassword){
        throw new Error('passwords dont match!')
    }

    const user=await User.findOne({email:userData.email}).select({id:true})
    if(user){
        throw new Error('user alreadY exist!')
    }

    return User.create(userData)
}


const authService={
    register, 
}

export default authService