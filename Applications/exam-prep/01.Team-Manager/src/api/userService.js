import { baseUrl } from "../constants.js"
import { removeUser, setUser } from "../utils.js"
import {get, post} from "./requester.js"


async function register(userData) {
    const result=await post(`${baseUrl}/users/register`,userData)
    setUser(result)
    return result
}

async function login(userData){
    const result=await post(`${baseUrl}/users/login`,userData)
    setUser(result)
    return result
}


async function logout(){
    const result=await get(`${baseUrl}/users/logout`)
    removeUser()

}

const userService={
    register,
    login,
    logout
}

export default userService
