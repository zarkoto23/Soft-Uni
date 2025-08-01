import User from "../models/User.js"



const register=async(userData)=>{





    const user=await User.findOne({email:userData.email}).select({_id:true})
    if(user){
        console.log(user);
        
        throw new Error('User already Exists!')
    }


    return User.create(userData)    
}





const authService={
    register,
}
export default authService