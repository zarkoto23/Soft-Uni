import eventEmiiter from "./msg-broker.js";

eventEmiiter.on('userCreated',userCreated)

 function userCreated(user){
    console.log(`${user} reporting service`);
    
}