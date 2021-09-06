
var arrayQuestions =[
    {
        question: 'Which of the following ventilatory techniques is likely to yield the LOWEST tidal volumes?',
        choices: ['One person bag-valve-mask', 'Two person bag-valve-mask','Flow restricted oxygen powered ventilatory device','Mouth-to-mask'],       
        answer: 'One person bag-valve-mask'
    },
    {
        question: 'In order to assist intubation, a paramedic may utilize Sellick maneuver. In this procedure, which cartilage are you compressing?',
        choices: ['Cricoid cartilage', 'Aryepiglottic cartilage', 'Thyroid cartilage', 'Hyoid cartilage'],
        answer: 'Cricoid cartilage'
    },
    {
        question: 'The patient has very shallow, rapid respirations with minimal chest wall motion and slight wheezing in the upper lung fields. Given this situation, what would you expect the arterial carbon dioxide levels to be?',
        choices: ['Not enough information to determine', 'Normal', 'Lowered', 'Elevated'],
        answer: 'Elevated'
    },
    {
        question: 'You are transporting a 48-year-old male patient between medical facilities... During the history, you learn that the patient was involved in a fall at work and suffered a hip fracture and a head injury. The patient is now presenting with labored breathing at 30/min that has progressively worsened over the last 24 hours, a heart rate of 104, and a blood pressure of 98/70. On auscultation, you hear diffuse rales. The patient denies any complaints of pain other than those related to his recent fall. What is the most likely cause of the patient respiratory distress?',
        choices: ['Cardiogenic shock', 'Congestive heart failure', 'Acute bronchitis', 'Adult respiratory distress syndrome'],
        answer: 'Adult respiratory distress syndrome'
    },
    {
        question: 'Which of the following is the most effective method for administering ventilations to an apneic patient?',
        choices: ['Two person bag-valve-mask.', 'FROPVD', 'One person bag-valve-mask.', 'Mouth-to-mouth.'],
        answer: 'Two person bag-valve-mask.'
    }
]

//variables from HTML element 

const startPageEl=document.querySelector("#start-page");
const questionPageEl=document.querySelector("#question-page");
const endPageEl=document.querySelector("#end-page");
const timerEl=document.querySelector("#timer");
const startButtonEl=document.querySelector("#start-button");
const questionTitleEl=document.querySelector("#question-title");
const questionChoicesEl=document.querySelector("#question-choices");
const finalScoreEl=document.querySelector("#final-score");
const intialsEl=document.querySelector("#intials");
const submitBtnEl=document.querySelector("#submitbtn");
const highScoresEl=document.querySelector("#high-scores");
const highscoreListEl=document.querySelector("#highscore-list");


questionPageEl.style.display="none";
endPageEl.style.display="none";
highScoresEl.style.display="none";

let timeLeft=60;
let timerId
let questionIndex=0
let score=0

function clocktick(){
    timeLeft--;
    timerEl.textContent=`time:${timeLeft}`;
    if (timeLeft <= 0){
        allDone();
        

    }
}

function startQuiz(){
    timerId=setInterval(clocktick, 1000);
    startPageEl.style.display="none";
    questionPageEl.style.display="block";
    generateQuestion();
}


function generateQuestion(){
    questionChoicesEl.innerHTML="";
    let currentQuestion=arrayQuestions[questionIndex];
    questionTitleEl.textContent=currentQuestion.question;
    currentQuestion.choices.forEach(function(choices){
        let tempBtn=document.createElement('button');
        tempBtn.setAttribute("value", choices);
        tempBtn.textContent=choices;
        tempBtn.onclick=compareAnswers;
        questionChoicesEl.appendChild(tempBtn);

    })
}
//fucntion for a button clickevent 

function compareAnswers() {
    const choice=this.value;
    const answer=arrayQuestions[questionIndex].answer;
    console.log(choice, answer);
     if (choice !== answer) {
        timeLeft-=10
     } 
    questionIndex++;
     if(questionIndex===arrayQuestions.length){
         allDone();

     } else{
        generateQuestion()
     }
  }

//function for end quiz
function allDone(){

    clearInterval(timerId);
    questionPageEl.style.display="none";
    endPageEl.style.display="block";
    timerEl.style.display="none";
    finalScoreEl.textContent=timeLeft;
}

//save highscore function
function highScore(){
    endPageEl.style.display="none";
    highScoresEl.style.display="block";
    const highScores=JSON.parse(localStorage.getItem("highscores"))|| [];
    let newScore={
        intials: intialsEl.value, 
        score: timeLeft
    };
    highScores.push(newScore);
    localStorage.setItem("highscores",JSON.stringify(highScores));
    for(i=0; i<localStorage.length; i++){
        let key=localStorage.intials(i);
        let value=localStorage.getItem(key);
        highscoreListEl.textContent+= `${key}: ${value}`
    }
    
}


    //save to local storage




startButtonEl.onclick=startQuiz
submitBtnEl.onclick=highScore