var startEl = document.getElementById("start-page")
var questionEl = document.getElementById("question-page")
var endEl = document.getElementById("end-page")
var startQuizBtn=document.getElementById("start-button")

questionEl.style.display="none"
endEl.style.display="none"

var questions =[
    {
        title: 'What differences in a child’s airway might make airway management more difficult than in an adult?',
        choices: ['a smaller jaw and a proportionally larger tongue', 'There are no anatomic differences that affect airway management in children versus adults.','smaller jaw, smaller teeth','longer airway and small tongue']       
        answer: '2'
    }
    {
        title: 'What is 1 plus 1?',
        choices: ['0', '1', '2', '3'],
        answer: '2'
    }
    {
        title: 'What is 1 plus 1?',
        choices: ['0', '1', '2', '3'],
        answer: '2'
    }
    {
        title: 'What is 1 plus 1?',
        choices: ['0', '1', '2', '3'],
        answer: '2'
    }
    {
        title: 'What is 1 plus 1?',
        choices: ['0', '1', '2', '3'],
        answer: '2'
    }
]
function startQuiz(){
    startEl.style.display="none"
    questionEl.style.display="block"
}


startQuizBtn.onclick= startQuiz