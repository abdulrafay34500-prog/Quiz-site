import {Questions} from './data/questions.js'

console.log(Questions)

let startButton = document.getElementById('js-start-quiz')
let parentDiv =document.querySelector('.parent-div')

startButton.addEventListener('click' ,()=>{
    parentDiv.classList.add('parent-dive')
    
})

////////////////////////////////////////////////////
