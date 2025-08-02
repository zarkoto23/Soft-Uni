import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/authUtils.js";





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

  const createdUser=await User.create(userData);
  
  const token=generateToken(createdUser)

  return token

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

   const token = generateToken(user)
   return token

}








const authService = {
  register,
  login
};
export default authService;
