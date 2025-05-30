import page from "../../node_modules/page/page.mjs";
import { util } from "./src/home.js";

import { showCreate } from "./src/create.js";
import { showDetails } from "./src/details.js";
import { showEdit } from "./src/edit.js";
import { showHome } from "./src/home.js";
import { showLogin } from "./src/login.js";
import { showProfile } from "./src/profile.js";
import { showRegister } from "./src/register.js";

const mainEl = document.querySelector("main");
const userNav=document.querySelector('#user')
const guestNav=document.querySelector('#guest')



function updateNav() {
  const token = localStorage.getItem('token');
  
  if (token) {
    userNav.style.display = 'block';
    guestNav.style.display = 'none';
  } else {
    userNav.style.display = 'none';
    guestNav.style.display = 'block';
  }
}

page('*', (ctx, next) => {
  updateNav();
  next();
});

page("/", showHome);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/login", showLogin);
page("/profile", showProfile);
page("/register", showRegister);



page.start();


export async function onDelete(data){
  const isOk=confirm('Are you sure?')

  if(isOk){

  if(data._ownerId===localStorage.getItem('id')){
  const response=await fetch(`http://localhost:3030/data/catalog/${data._id}`,{
    method:'DELETE',
    headers:{
      "Content-Type":"application/json",
      'X-Authorization':util.token
    }
  })

 if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    }
      updateNav()
    page.redirect('/')
  }


}
document.querySelector('#logoutBtn').addEventListener('click', logOut)
async function logOut(){

 const response= await fetch('http://localhost:3030/users/logout',{
  method:'GET',
  headers:{'Content-Type':'application/json',
          'X-Authorization':util.token

  }


 })
 localStorage.removeItem('token')
 localStorage.removeItem('id')
 page.redirect('/')


}





