import msgBroker from "./msg-broker.js";

msgBroker.subscribe('userCreated',userCreated)

function userCreated(userData){
console.log(`audit sys: ${userData}`);
    
}