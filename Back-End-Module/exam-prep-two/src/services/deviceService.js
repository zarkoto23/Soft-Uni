import Device from "../models/Device.js"


 const getLatest=()=>{
   return Device.find({}).sort({_id: "desc"}).limit(3)
}



 const create=(deviceData,userId)=>{
    return Device.create({...deviceData,owner:userId})
}






 const deviceService={
    create,
    getLatest
}

export default deviceService