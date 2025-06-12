export function getToken(){
  return localStorage.getItem('acessToken')
}

export function getUserId(){
  return localStorage.getItem('userId')
}

export function setUserData(userData){
  localStorage.setItem('token', userData.acessToken)
  localStorage.setItem('userId', userData._id)
  localStorage.setItem('email', userData.email)
}

export function removeUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('email')

}
