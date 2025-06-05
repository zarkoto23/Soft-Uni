import { del } from "./api/requester.js";
import userServices from "./api/userService.js";
import { getToken, removeUserData } from "./utils.js";


function tashak(){
  return 'TashakkkkKKK'
}

import page from "../node_modules/page/page.mjs";

import showCreatePage from "./views/create.js";
import showDashboardPage from "./views/dashboard.js";
import showDetailsPage from "./views/details.js";
import showEditPage from "./views/eidt.js";
import showHomePage from "./views/home.js";
import showLoginPage from "./views/login.js";
import showProfilePage from "./views/profile.js";
import showRegisterPage from "./views/register.js";


page('/',showHomePage)
page('/login',showLoginPage)
page('/register',showRegisterPage)

page('/dashboard',showDashboardPage)
page('/create',showCreatePage)
page('/profile',showProfilePage)

page('/details/:id',showDetailsPage)
page('/edit/:id',showEditPage)

page.start()


export function showNavigation(){
  const token=getToken()

  const guestLinkEl=document.querySelectorAll('.guest-link')
  const userLinkEl=document.querySelectorAll('.user-link')

  if(token){
    userLinkEl.forEach(element => element.style.display='block')
    guestLinkEl.forEach(element=>element.style.display='none')
  }else{
    userLinkEl.forEach(element => element.style.display='none')
    guestLinkEl.forEach(element=>element.style.display='block')
  }
}

showNavigation()

const logoutBtn=document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', logoutUser)

async function logoutUser(){

try {
  await userServices.logout()
  showNavigation()
  
  page.redirect('/')
  
} catch (error) {
  alert(error.message)
}
}