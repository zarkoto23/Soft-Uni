import {html, render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import {homeTemlate} from './home.js' 
import {dataUrl} from './constant.js'



const mainEl=document.querySelector('main')

export async function showProfilePage(){
   const userId=localStorage.getItem('id')
  const respone =await fetch(dataUrl)
  const data=await respone.json()

  const userProducts=data.filter(product=>product._ownerId===userId)

  render(homeTemlate(userProducts),mainEl)
}

// // 





