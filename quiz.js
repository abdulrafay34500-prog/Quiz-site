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
    <P class="answers js-answers" data-selected-ans="${question.Option1}" data-ans-index="${index}">${question.Option1}</P>
    <P class="answers js-answers" data-selected-ans="${question.Option2}" data-ans-index="${index}">${question.Option2}</P>
    <P class="answers js-answers" data-selected-ans="${question.Option3}" data-ans-index="${index}">${question.Option3}</P>
    <P class="answers js-answers" data-selected-ans="${question.Option4}" data-ans-index="${index}">${question.Option4}</P>
    </div>`

    document.querySelector('.js-questining-page')
    .innerHTML =Html;

    document.querySelectorAll('.js-answers').forEach((btn) => {

    btn.addEventListener('click' , ()=>{

        let selectedAnswer =btn.dataset.selectedAns
        let indexx =btn.dataset.ansIndex
        let qus =Questions[indexx]

         FinalResult(selectedAnswer , qus)




        index++
        generatingHtml()
        
    })
    });

}
////////////////////////////////////////////////////////

function showingResultPage() {
    parentDiv.classList.add('test-Done')
}

let rightAnswers = 0
let message =''

function FinalResult(selectedAnswer , qus) {
    if(qus.ans == selectedAnswer){
        rightAnswers++
    }

    

    document.querySelector('.right-ans').innerHTML=rightAnswers;
    document.querySelector('.total-questions').innerHTML=Questions.length;

    if (rightAnswers >=0 && rightAnswers<=3){
          message='You fucking Idiot'
    }else {
         message='Dont be happy it was so easy idiot'
    }

    document.querySelector('.js-compliment-text').innerHTML =message

}


