function solve() {

  const mapper = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
    'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
    'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
}

  let correctAnswers=0

  const questions=document.querySelectorAll('h2')
  let sectionEl=Array.from(document.querySelectorAll('section'))

  for(let i=0;i<sectionEl.length;i++){
    let currentQuest=questions[i].textContent
    let buttons=sectionEl[i].querySelectorAll('p')
    for(el of buttons){
      el.addEventListener('click' , clickAnswer)
    }

    function clickAnswer(e){
      if(e.currentTarget.textContent===mapper[currentQuest]){
        correctAnswers+=1
      }
        if(i<2){
          sectionEl[i].style.display='none'
          sectionEl[i+1].style.display='block'
        }else{
          let result = document.querySelectorAll('.results-inner')[0].children;
          if(correctAnswers===3){
            result[0].textContent = 'You are recognized as top JavaScript fan!';
            sectionEl[i].style.display = 'none';
            document.getElementById('results').style.display = 'block'

          result.textContent='You are recognized as top JavaScript fan!'
            
          }else{
            result[0].textContent = `You have ${correctAnswers} right answers`;
            sectionEl[i].style.display = 'none';
            document.getElementById('results').style.display = 'block';
            
          }
          
        }
      
    }
  
  }




}
