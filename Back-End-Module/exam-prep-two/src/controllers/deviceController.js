import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import deviceService from "../services/deviceService.js";

const deviceController=Router()

deviceController.get('/create',isAuth,(req, res)=>{
    res.render('devices/create')
})
deviceController.post('/create',isAuth, async (req, res)=>{
    const deviceData=req.body

try {
    await deviceService.create(deviceData)
    
} catch (error) {
    
}
    

})



export default deviceController