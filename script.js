var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var time = 30;
timerEl.innerHTML = time;

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
            answer: 1
        }


      ];

      console.log(questions);

function startTimer () {
    var timer = setInterval(function(){
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

startBtn.addEventListener("click", startTimer);
