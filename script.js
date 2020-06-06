var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var quizEl = document.querySelector("#quiz-main");
var input = document.createElement("input");
var timer;
var time = 50;
var timeLeft = time;
var score = 0;
var topScores = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : []
timerEl.innerHTML = timeLeft;
var questionIndex = 0;
createScoreList();

function createScoreList (){
if (topScores.length !== 0){
    var scoresElement = document.querySelector('#score-list');
    scoresElement.innerHTML = '';
    var listItem;
    topScores.forEach(element =>  { 
    listItem = document.createElement('li'); 
    listItem.textContent = element;
    listItem.innerHTML += '<hr>';
    scoresElement.appendChild(listItem);
    });

} else{
    return;
}
}


var questions =
      [
        {
            question: "Which Movie Did Thanos First Appear In?",
            choices: ["Guardians Of The Galaxy", "Thor", "The Avengers", "The Avengers Age Of Ultron"],
            answer: 2
        },

        {
            question: "Who Is The Highest-Paid Actor In The MCU With Over £60m In Career Earnings From His Work With Marvel?",
            choices: ["Robert Downey Jr (Iron-Man)", "Chris Evans (Captain America)","Bradley Cooper (Rocket)", "Chris Hemsworth (Thor)"],
            answer: 3
        },

        {
            question: "How Many Films Has Robert Downey Jr Featured In The MCU As Iron-Man?",
            choices: ["7", "8", "9", "10"],
            answer: 3
        },

        {
            question: "Which Soundtrack Sold Over One Million Copies?",
            choices: ["Guardians Of The Galaxy", "Avengers: Endgame", "Black Panther", "Avengers: Infinity War"],
            answer: 0
        },

        {
            question: "Why Didn’t Captain America Eat At The Shawarma Restaurant At The End Of The Avengers?",
            choices: ["Ate McDonalds for lunch so he wasn’t hungry", "Was wearing a prosthetic jaw", "Recently had tooth surgery", "Doesn’t like shawarma’s"],
            answer: 1
        },

        {
            question: "Why Does Pepper Potts Walk Around Stark Tower Barefoot?",
            choices: ["Forgot her socks", "To make Iron-Man look taller", "Spiritual reasons", "The floor is heated"],
            answer: 1
        },

        {
            question: "What Were The Production Costs For Avengers: Endgame?",
            choices: ["$356m", "$754m", "$503m", "$629m"],
            answer: 0
        },

        {
            question: "How Many Cameos Has Stan Lee Made In Marvel Films?",
            choices: ["10", "7", "15", "4"],
            answer: 2
        },

        {
            question: "Who Is The Only Actor In The MCU To Feature As The Lead And Also Get A Writing Credit?",
            choices: ["Chris Evans", "Robert Downey Jr", "Tom Holland", "Paul Rudd"],
            answer: 3
        },

        {
            question: "Who Was Initially Offered The Role Of Thor Before Chris Hemsworth?",
            choices: ["Christian Bale", "Daniel Craig", "Tom Hanks", "Brad Pitt"],
            answer: 1
        },

        {
            question: "Why Does Nick Fury Wear An Eye-Patch In A Lot Of Marvel Films?",
            choices: ["Injured in battle", "Cooking accident", "Cat scratched his eye out", "Accident on set"],
            answer: 2
        },

        {
            question: "In Which Film Was The Region Of Wakanda First Introduced In The MCU?",
            choices: ["Iron-Man 2", "The Avengers", "Guardians Of The Galaxy", "Iron-Man 3"],
            answer: 0
        },

        {
            question: "How Long Did It Take Dave Bautista To Get Ready For The Character Of Drax Each Day?",
            choices: ["30 mins", "1-2 hours", "2-3 hours", "3-5 hours"],
            answer: 3
        },

        {
            question: "Which Superhero Is Said To Be The Wealthiest Character In The MCU With 5x More Wealth Than Iron Man In Second?",
            choices: ["Nick Fury", "Loki", "Black Panther", "Captain America"],
            answer: 2
        },

        {
            question: "How Long Did Baby Groot’s Dancing Scene At The Start Of Guardians Of The Galaxy 2 Take To Put Together?",
            choices: ["Two years", "1 month", "6 months", "2 weeks"],
            answer: 0
        },

        {
            question: "Which Three Marvel Films Are Set Within The Same Week?",
            choices: ["Iron Man, Avengers, Ant-Man", "Iron Man 2, The Incredible Hulk, Thor", "Avengers: Endgame, Avengers: Infinity War, Captain Marvel", "Avengers: Endgame, SpiderMan: Homecoming, Ant-Man & The Wasp"],
            answer: 1
        },

        {
            question: "What Is The News Station Called That Is Used Throughout The MCU?",
            choices: ["SL News", "Cap Daily", "WHIH News", "Stark News"],
            answer: 2
        },

        {
            question: "Which Hollywood Actor Once Portrayed Nick Fury Before Samuel L Jackson?",
            choices: ["Dustin Hoffman", "Nicolas Cage", "Michael Caine", "Matt Damon"],
            answer: 0
        },

        {
            question: "What Is The Only Film In The MCU Where The Main Actor Plays Both The Main Hero And Main Villain?",
            choices: ["Guardians of the Galaxy 2", "Ant-Man", "Dr Strange", "Thor"],
            answer: 2
        },

        {
            question: "Which Of These Marvel Films Were Nominated For Best Picture At The Oscar’s?",
            choices: ["Iron Man 3", "Black Panther", "Avengers: Infinity War", "Dr Strange"],
            answer: 1
        }


      ];

      function renderQuestion() {
       quizEl.textContent = "";
       var newQuestion = document.createElement("p");
       newQuestion.classList.add("flow-text");
       var newButton;
        newQuestion.textContent = questions[questionIndex].question
        quizEl.appendChild(newQuestion);
        questions[questionIndex].choices.forEach(element => {
            newButton = document.createElement('button');
            newButton.setAttribute("data-number", questions[questionIndex].choices.indexOf(element));
            newButton.textContent = element;
            newButton.classList.add("quiz-buttons", "btn", "grey", "darken-4", "button-style");
            quizEl.appendChild(newButton);
        });
        
      }

function startTimer () {
        timer = setInterval(function(){
        if(timeLeft <= 0){
            //clearInterval(timer);
            endGame();
        }
        setTimer();
        timeLeft--;
    
    },1000);
}


function setTimer() {
    timerEl.innerHTML = timeLeft;

}
function startQuiz() {
    renderQuestion();
    console.log(startBtn.style.display);
    startBtn.style.display = 'none';
}

function endGame(){
    clearInterval(timer);

    input.setAttribute('type', 'text', 'placeholder', 'name');
    input.setAttribute('placeholder', 'name');
    quizEl.textContent = "Game Over, your score: " + score;
    quizEl.appendChild(input);

} 

function resetQuiz () {

}


startBtn.addEventListener("click", function(){
startTimer();
startQuiz();
});

input.addEventListener("keyup", function(e){
    if(e.keyCode === 13 && input.value.trim() !== ""){
        topScores.push(input.value+ ": " + score);
        input.parentNode.removeChild(input);
        localStorage.setItem('scores', JSON.stringify(topScores));
        createScoreList();
    }
});

quizEl.addEventListener("click", function(e){
    
    var buttonValue = parseInt(e.target.getAttribute("data-number"));
    if(buttonValue === questions[questionIndex].answer){
        e.target.classList.remove("grey", "darken-4");
        e.target.classList.add("green");
        score += 10;
        timeLeft += 10;
        if(questionIndex < questions.length -1 && timeLeft > 0) {
            questionIndex++;
            setTimeout(function(){
                renderQuestion();
            }, 1000);

        }else{
            setTimeout(function(){
                endGame();
            }, 1000);
        }
    }else if(e.target.tagName === "BUTTON"){
        e.target.classList.remove("grey", "darken-4");
        e.target.classList.add("red");
        timeLeft -= 10;
        if(questionIndex < questions.length -1 && timeLeft > 0){
        questionIndex++;
        setTimeout(function(){
            renderQuestion();
        }, 1000);
        
        }else{
            setTimeout(function(){
                endGame();
            }, 1000);
            
        }
    }
});







