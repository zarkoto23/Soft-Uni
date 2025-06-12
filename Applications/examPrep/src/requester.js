import { getToken } from "./util.js";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  const token=getToken()

  if(token){
    options.headers['X-Authorization']=token
  }
  if(data){
    options.headers['Content-Type']='application/json'
    options.body=JSON.stringify(data)
  }

  
}
