import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import deviceService from "../services/deviceService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const deviceController=Router()

deviceController.get('/', async(req, res)=>{

    const devices=await deviceService.getAll()
     res.render('devices/catalog',{devices})
})

deviceController.get('/create',isAuth,(req, res)=>{
    res.render('devices/create')
})
deviceController.post('/create',isAuth, async (req, res)=>{
    const deviceData=req.body
    const userId=req.user.id

try {
    await deviceService.create(deviceData,userId)
    res.redirect('/devices')
    
} catch (error) {
    
    res.render('devices/create', {
    error: getErrorMessage(error),
    device: deviceData
});

}
    

})


deviceController.get('/:deviceId/details', async(req, res)=>{
    const deviceId=req.params.deviceId

    const device=await deviceService.getOne(deviceId)
    
    const isOwner=device.owner.equals(req.user?.id)
    const isPrefered=device.preferredList.includes(req.user?.id)




    res.render('devices/details',{device, isOwner, isPrefered})

})


deviceController.get('/:deviceId/prefer',isAuth, async(req, res)=>{
    const userId=req.user.id
    const deviceId=req.params.deviceId
    

    try{
    await deviceService.prefer(deviceId, userId)
    res.redirect(`/devices/${deviceId}/details`)

    }catch (error) {
    const device = await deviceService.getOne(deviceId);
    const isOwner = device.owner.equals(req.user?.id);

    res.render('devices/details', {
      device,
      isOwner,
      error: getErrorMessage(error),
    });
  }
});

deviceController.get('/:deviceId/delete', isAuth,async(req ,res)=>{
    const deviceId=req.params.deviceId
    const userId=req.user.id

    try {
        await deviceService.remove(deviceId, userId)
        res.redirect('/devices')
    } catch (error) {
    const device = await deviceService.getOne(deviceId);
    const isOwner = device.owner.equals(req.user?.id);

    res.render('devices/details', {
      device,
      isOwner,
      error: getErrorMessage(error),
    });
  }
})




export default deviceController