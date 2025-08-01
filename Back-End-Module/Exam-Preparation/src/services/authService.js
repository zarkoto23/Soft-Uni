import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const register = async (userData) => {
  if (userData.password !== userData.confirmPassword) {
    throw new Error("Passwords not match!");
  }

  const user = await User.findOne({ email: userData.email }).select({
    _id: true,
  });
  if (user) {
    console.log(user);

    throw new Error("User already Exists!");
  }

  return User.create(userData);
};




const login=async(email, password)=>{
    //validate user
    const user=await User.findOne({email})
    if(!user){
        throw new Error('Invalid user or email')
    }
    
   const isValid= await bcrypt.compare(password, user.password)
   if(!isValid){
    throw new Error('Invalid user ot MAIL')
   }

   const payload={
    id:user.id,
    email:user.email,
    username:user.username
   }

   const token =jwt.sign(payload,JWT_SECRET)

   return token
}





const authService = {
  register,
  login
};
export default authService;
