let questions = [{
            question: "Which of the following is not an HTML element?",
            choice: {
                A: 'body',
                B: 'element',
                C: 'h3'
            },
            correctAnswer: 'b'
        },
        {
            question: "What does CSS stand for??",
            choice: {
                A: 'Cool Style Sheet',
                B: 'Collective Styles Sheet',
                C: 'Cascading Style Sheets'
            },
            correctAnswer: 'c'
        }, {
            question: "What is the correct HTML for referring to an external style sheet?",
            choice: {
                A: ' <link rel="stylesheet" type="text/css" href="mystyle.css">',
                B: ' <style src="mystyle.css">',
                C: ' <stylesheet>mystyle.css</stylesheet>'
            },
            correctAnswer: 'b'
        }, {
            question: "Inside which HTML element do we put the JavaScript?",
            choice: {
                A: '<script>',
                B: '<scripting>',
                C: '<javaScript>'
            },
            correctAnswer: 'a'
        }, {
            question: 'How do you write "Hello World" in an alert box?',
            choice: {
                A: 'alert("Hello World")',
                B: 'alertBox("Hello World")',
                C: 'msgBox("Hello World")'
            },
            correctAnswer: 'a'
        }, {
            question: "Which of the following is correct?",
            choice: {
                A: 'jQuery is a JSON Library',
                B: 'jQuery is a JavaScript Library',
                C: 'jQuery is its own thing'
            },
            correctAnswer: 'b'
        }, {
            question: "Which sign does jQuery use as a shortcut for jQuery?",
            choice: {
                A: ' the % sign',
                B: 'the * sign',
                C: 'the $ sign'
            },
            correctAnswer: 'c'
        }, {
            question: "Choose the correct HTML element for the largest heading:",
            choice: {
                A: '<h1>',
                B: '<head',
                C: '<h6>'
            },
            correctAnswer: 'a'
        }, {
            question: "The Bootstrap grid system is based on how many columns?",
            choice: {
                A: '9',
                B: '12',
                C: '10'
            },
            correctAnswer: 'b'
        }, {
            question: "Which class is used to create a big box for calling extra attention?",
            choice: {
                A: '.container',
                B: '.bigbox',
                C: '.jumbotron'
            },
            correctAnswer: 'c'
        },
    ]
    //timer section. starting with 90 seconds
var seconds = 90
setInterval(function() {
    if (seconds <= 0) {
        clearInterval(seconds);
    }
    document.querySelector("#timer").textContent = "Seconds Left: " + seconds--;

}, 1000);

//quizBuild();
//setting the questions and anwers
let startquiz = document.querySelector("#startquiz");

startquiz.addEventListener("click", function(event) {
    document.querySelector("#startquiz").setAttribute("class", "hide")
    quizBuild();
    document.querySelector("ol").style.visibility = "visible";
})

function quizBuild(event) {
    let i = 0
    document.querySelector("#question").textContent = questions[i].question;
    document.querySelector("#choice1").textContent = questions[i].choice["A"];
    document.querySelector("#choice2").textContent = questions[i].choice["B"];
    document.querySelector("#choice3").textContent = questions[i].choice["C"];
}