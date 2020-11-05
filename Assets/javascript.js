let seconds = 90;
let questionNum = 0
let notify = document.querySelector("#notification");
let olEl = document.querySelector(".ol");
let questEL = document.querySelector("#question");
let startBtn = document.querySelector("#startBtn");
let instructEL = document.querySelector("#instruct");
let userScore = 0


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


    //setting question choices based off question index
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

            //checking answers and display correct or incorrect 
            //adding to score or taking time away depending on answer
            if (li.textContent === questions[questionNum].correctAnswer) {
                notify.style.visibility = "visible";
                notify.textContent = "Correct!"
                notify.className = "alert alert-success"
                setTimeout(function() {
                    notify.textContent = ""
                    notify.className = ""
                }, 1000);

                userScore = userScore + 10


            } else {

                notify.textContent = "Incorrect!"
                notify.className = "alert alert-danger"
                setTimeout(function() {
                    notify.textContent = ""
                    notify.className = ""
                }, 1000);

                seconds = seconds - 15;
            }

            checkQuestionNum()


        });
    }

};
//checking the question number and either continuing or finishing the quiz
function checkQuestionNum() {
    if (questionNum === questions.length - 1) {

        finishQuiz()

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
    questEL.textContent = "The quiz is over! You scored " + userScore + " points!";
    instructEL.textContent = "Click here to log score!";
    finish.setAttribute("class", "show");
    console.log(userScore)
    instructEL.addEventListener("click", function(event) {
        localStorage.setItem("score", userScore)
        window.location.href = "./Assets/highScore.html";
    })
}