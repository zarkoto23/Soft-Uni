import  jwt  from "jsonwebtoken"
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import 'dotenv/config.js'



const SECRET=process.env.JWT_SECRET || 'BASICSECRET'

export default{

    async register(userData){

        // if(userData.password!==userData.rePassword){
        //     throw new Error('passwords dont match')
        // }

        const userCount=await User.countDocuments({email:userData.email})
        if(userCount>0){
            throw new Error ('email already exist!!')
        }

        return User.create(userData)
        
    },

    async login(email, password){
        

        const user= await User.findOne({email})
        
        

        if(!user){
            throw new Error('Invalid email')
            
        }

        const isValid=await bcrypt.compare(password, user.password)
        if(!isValid){
            throw new Error('invalid pass')
        }

        //generate token
        const payload={
            id:user._id,
            email:user.email,
        }


        //todo: refactor to use async option
        
        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });

        return token


    },
     
}