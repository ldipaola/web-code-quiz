var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var quizEl = document.querySelector("#quiz-main");
var timer;
var time = 30;
var score = 0;
timerEl.innerHTML = time;
var questionIndex = 0;




var questions =
      [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: ["<link>", "<javascript>", "<script-link>", "<script>"],
            answer: 3
        },

        {
            question: "The external JavaScript file must contain the <script> tag.",
            choices: ["False", "True"],
            answer: 0
        }


      ];

      function renderQuestion() {
       quizEl.textContent = "";
       var newQuestion = document.createElement("p");
       var newButton;
        newQuestion.textContent = questions[questionIndex].question
        quizEl.appendChild(newQuestion);
        questions[questionIndex].choices.forEach(element => {
            newButton = document.createElement('button');
            newButton.setAttribute("data-number", questions[questionIndex].choices.indexOf(element));
            newButton.textContent = element;
            newButton.classList.add("quiz-buttons", "waves-effect", "waves-light", "btn", "grey", "darken-4", "button-style");
            quizEl.appendChild(newButton);
        });
        
      }

function startTimer () {
        timer = setInterval(function(){
        if(time === 0){
            clearInterval(timer);
        }
        setTimer();
        time--;
    
    },1000);
}


function setTimer() {
    timerEl.innerHTML = time;

}
function startQuiz() {
    renderQuestion();
    
}

function endGame(){
    clearInterval(timer);
    if(score > 0){
        score += time;
    }
    
    quizEl.textContent = "Game Over, your score: " + score;
    


} 


startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
quizEl.addEventListener("click", function(e){
    
    var buttonValue = parseInt(e.target.getAttribute("data-number"));
    if(buttonValue === questions[questionIndex].answer){
        alert("Correct");
        score += 10;
        if(questionIndex < questions.length -1) {
            questionIndex++;
            renderQuestion();

        }else{
            endGame();
        }
    }else if(e.target.tagName === "BUTTON"){
        alert("Wrong!");
        time -= 10;
        if(questionIndex < questions.length -1){
        questionIndex++;
        renderQuestion();
        }else{
            endGame();
        }
    }
});







