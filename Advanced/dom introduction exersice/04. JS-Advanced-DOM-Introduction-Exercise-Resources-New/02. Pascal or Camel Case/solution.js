function solve() {
  const text = document.querySelector("#text").value.toLowerCase().split(' ');
  const convention = document.querySelector("#naming-convention").value.toLowerCase();
  const resultEl = document.querySelector("#result");
 if (text === "" || convention === "") {

    return;
  }

  let result=''

if(convention=='camel case'){


  result=text[0]+text.slice(1).map(word=>word[0].toUpperCase()+word.slice(1)).join('')


  
}else if(convention=='pascal case'){
  result=text.map((word)=>word[0].toUpperCase() + word.slice(1)).join('');
  console.log(result)


}else{
  result='Error!'
}
  resultEl.textContent=result

}

