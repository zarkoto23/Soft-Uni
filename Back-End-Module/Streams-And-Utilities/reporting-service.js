import msgBroker from "./msg-broker.js";

msgBroker.subscribe('userCreated',userCreated)

 function userCreated(user){
    console.log(`${user} reporting service`);
    
}