import eventEmiiter from "./msg-broker.js";

eventEmiiter.on('userCreated',userCreated)

function userCreated(userData){
console.log(`audit sys: ${userData}`);
    
}