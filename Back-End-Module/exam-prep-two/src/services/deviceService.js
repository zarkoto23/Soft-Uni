import Device from "../models/Device.js"


export const create=(deviceData)=>{
    Device.create(deviceData)
}

export default deviceService={
    create,
}