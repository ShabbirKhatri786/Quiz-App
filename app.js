var root = document.getElementById("root");

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "question");


var questionEliment = document.createElement("h2");
mainDiv.appendChild(questionEliment);



var question = [
    {
        question: "what is the capital city of Pakistan?",
        answers: ["Lahore", "Karachi", "Islamabad", "Multan"],
        correct: "Islamabad"
    },
    {
        question: "what is the city of light called",
        answers: ["Karachi", "Lahore", "Islamabad", "Multan"],
        correct: "Karachi"
    },
];

var currentQuestionIndex = 0;
var score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuistion();
}


function showQuistion() {
    var currentQuistion = question[currentQuestionIndex];
    var questionIndex = currentQuestionIndex + 1;
    questionEliment.innerHTML = questionIndex + ". " + currentQuistion.question;

    mainDiv.innerHTML = ""; 
    mainDiv.appendChild(questionEliment);

    currentQuistion.answers.forEach(choice => {
        var button = document.createElement("button");
        button.innerHTML = choice;
        button.onclick = function () {
            if (choice.toLowerCase() === currentQuistion.correct.toLowerCase()) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < question.length) {
                showQuistion();
            } else {
                showScore();
            }

        }
        mainDiv.appendChild(button);
    });
   
}

function showScore() {
    mainDiv.innerHTML = "Quiz Complete! Your score is " + score + "out of " + question.length;

    var replayButton = document.createElement("button");
    replayButton.innerHTML = "Replay";
    replayButton.onclick = function () {
        startQuiz();
    };
    mainDiv.appendChild(replayButton);
}


startQuiz()

root.appendChild(mainDiv)