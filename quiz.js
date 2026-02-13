import {Questions} from './data/questions.js'

console.log(Questions.length)



let startButton = document.getElementById('js-start-quiz')
let parentDiv =document.querySelector('.parent-div')

startButton.addEventListener('click' ,()=>{
    parentDiv.classList.add('parent-dive')
    
})

////////////////////////////////////////////////////

let index=0;

generatingHtml()

function generatingHtml (){

    if (index >=Questions.length){
        showingResultPage()
        index =0
        
    }
 
    
    let question =Questions[index]
    
    

let Html=`<p class="Question-counter"><span>0</span> Out of 5</p>
            <h2>${question.question}</h2>
            
              <div class="ans-options">
                <P class="answers js-answers">${question.Option1}</P>
                <P class="answers js-answers">${question.Option2}</P>
                <P class="answers js-answers">${question.Option3}</P>
                <P class="answers js-answers">${question.Option4}</P>
               </div>`

    document.querySelector('.js-questining-page')
    .innerHTML =Html;

    document.querySelectorAll('.js-answers').forEach((btn) => {

    btn.addEventListener('click' , ()=>{
        index++
        generatingHtml()
        
    })
    });

}
////////////////////////////////////////////////////////

function showingResultPage() {
    parentDiv.classList.add('test-Done')
}



