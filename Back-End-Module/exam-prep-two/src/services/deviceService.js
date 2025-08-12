import Device from "../models/Device.js"


 const getAll=()=>Device.find({})




 const getLatest=()=>{
   return Device.find({}).sort({_id: "desc"}).limit(3)
}


const getOne=(deviceId)=> Device.findById(deviceId)


 const create=(deviceData,userId)=>{
    return Device.create({...deviceData,owner:userId})
}

const prefer=async(deviceId, userId)=>{
   const device=await Device.findById(deviceId)

   if(device.owner.equals(userId)){
      throw new Error('cannot prefer your own offer')
   }

   if(device.preferredList.includes(userId)){
      throw new Error('you already preffer this offer')
   }

   device.preferredList.push(userId)
   return device.save()

}

const remove=async(deviceId,userId)=>{
   const device=await getOne(deviceId)
   if(!device.owner.equals(userId)){
      throw new Error('only owner can delete this offer')
   }

   return Device.findByIdAndDelete(deviceId)

}


const update=async(deviceId, userId, deviceData)=>{
     const device=await getOne(deviceId)
   if(!device.owner.equals(userId)){
      throw new Error('only owner can edit this offer')
   }

   return Device.findByIdAndUpdate(deviceId, deviceData)


}




 const deviceService={
    create,
    getLatest,
    getAll,
    getOne,
    prefer,
    remove,
    update
}

export default deviceService