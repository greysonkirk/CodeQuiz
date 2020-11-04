let seconds = 3;
let questionNum = 0
let notify = document.querySelector("#notification");
let olEl = document.querySelector(".ol");
let questEL = document.querySelector("#question");
let startBtn = document.querySelector("#startBtn");
let instructEL = document.querySelector("#instruct");
let userScore = 0
let questions = [{
        question: "Which of the following is not an HTML element?",
        choices: [
            'A: body',
            'B: element',
            'C: h3'
        ],
        correctAnswer: 'B: element'
    },
    {
        question: "What does CSS stand for??",
        choices: [
            'A: Cool Style Sheet',
            'B: Collective Styles Sheet',
            'C: Cascading Style Sheets'
        ],
        correctAnswer: 'C: Cascading Style Sheets'
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        choices: [
            'A:  <link rel="stylesheet" type="text/css" href="mystyle.css">',
            'B:  <style src="mystyle.css">',
            'C:  <stylesheet>mystyle.css</stylesheet>'
        ],
        correctAnswer: 'B:  <style src="mystyle.css">'
    }, {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            'A: <script>',
            'B: <scripting>',
            'C: <javaScript>'
        ],
        correctAnswer: 'A: <script>'
    }, {
        question: 'How do you write "Hello World" in an alert box?',
        choices: [
            'A: alert("Hello World")',
            'B: alertBox("Hello World")',
            'C: msgBox("Hello World")'
        ],
        correctAnswer: 'A: alert("Hello World")'
    }, {
        question: "Which of the following is correct?",
        choices: [
            'A: jQuery is a JSON Library',
            'B: jQuery is a JavaScript Library',
            'C: jQuery is its own thing'
        ],
        correctAnswer: 'B: jQuery is a JavaScript Library',
    }, {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        choices: [
            'A: the % sign',
            'B: the * sign',
            'C: the $ sign'
        ],
        correctAnswer: 'C: the $ sign'
    }, {
        question: "Choose the correct HTML element for the largest heading:",
        choices: [
            'A: <h1>',
            'B: <head',
            'C: <h6>'
        ],
        correctAnswer: 'A: <h1>'
    }, {
        question: "The Bootstrap grid system is based on how many columns?",
        choices: [
            'A: 9',
            'B: 12',
            'C: 10'
        ],
        correctAnswer: 'B: 12'
    }, {
        question: "Which class is used to create a big box for calling extra attention?",
        choices: [
            'A: .container',
            'B: .bigbox',
            'C: .jumbotron'
        ],
        correctAnswer: 'C: .jumbotron'
    },
]



//quizBuild();
//setting the questions and anwers
let startquiz = document.querySelector("#startBtn");

startquiz.addEventListener("click", function(event) {

    document.querySelector("#startquiz").setAttribute("class", "hide")
    quizBuild();
    document.querySelector("ol").style.visibility = "visible";
    //timer section. starting with 90 seconds
    setInterval(function() {
        if (seconds <= 0) {
            clearInterval(seconds);
            finishQuiz();
        }
        document.querySelector("#timer").textContent = "Seconds Left: " + seconds--;

    }, 1000);
})



function quizBuild(event) {


    // let c = questions.choices.length
    document.querySelector("#question").textContent = questions[questionNum].question;

    for (let i = 0; i < questions[questionNum].choices.length; i++) {
        const choice = questions[questionNum].choices[i];

        let li = document.createElement("li");
        li.textContent = choice;
        li.setAttribute("data-id", i);
        li.className = "list-group-item list-group-item-action";
        olEl.append(li)
            //checking answer, adding points or subtracting seconds
        li.addEventListener("click", function(event) {


            if (li.textContent === questions[questionNum].correctAnswer) {
                console.log(li.textContent)
                console.log(questions[questionNum].correctAnswer)
                userScore + 10


            } else {

                seconds = seconds - 15;
            }

            checkQuestionNum()


        });
    }

};

function checkQuestionNum() {
    if (questionNum === questions.length) {
        finishQuiz()
        return;
    } else {
        choices.innerText = ""
        questionNum++;
        quizBuild();
    }
}


//times up or user finished. Display score and go to highscores page 
function finishQuiz() {
    let finish = document.querySelector("#startquiz");
    choices.innerText = ""
    questEL.textContent = "The quiz is over!";
    instructEL.textContent = "Click here to log score!";
    finish.setAttribute("class", "show");

    instructEL.addEventListener("click", function() {
        window.location.href = "./Assets/highScore.html";
    })
}