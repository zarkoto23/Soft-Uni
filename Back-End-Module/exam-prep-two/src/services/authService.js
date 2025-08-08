import User from "../models/User.js"
import { generateToken } from "../utils/authUtil.js"

import bcrypt from 'bcrypt'


const register=async (userData)=>{
    if(userData.password!==userData.confirmPassword){
        throw new Error('passwords dont match!')
    }

    const user=await User.findOne({email:userData.email}).select({id:true})
    if(user){
        throw new Error('user alreadY exist!')
    }

    const createdUser=await User.create(userData)

    const token=generateToken(createdUser)
    return token
}


const login=async(email, password)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error('User of email Wrong!')
    }

    const isValid=await bcrypt.compare(password, user.password)
    if(!isValid){
        throw new Error('user or mail Wrong2')
    }

    const token=generateToken(user)

    return token


}


const authService={
    register, 
    login,
}

export default authService