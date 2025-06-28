
const events={
    

}

 function subscribe(evName,handler ){
    
    if(!events[evName]){
        events[evName]=[]
    }

    events[evName].push(handler)

}

function pubEmitter(evName,data){
    events[evName].forEach(elementHandler => {
        elementHandler(data)
    });
}


export default {
    subscribe,
    pubEmitter
}