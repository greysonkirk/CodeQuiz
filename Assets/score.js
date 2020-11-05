let usersScoreEl = document.querySelector("#usersScore");
let scoreBoard = document.querySelector("#scoreList");
let initial = document.querySelector("#initials");
let scoreArray = [{

}];
let userID = 0
let scoreScore = localStorage.getItem('score')

usersScoreEl.textContent = "You scored " + scoreScore + " points!"

let scoreList = localStorage.getItem("score")


$("#subBtn").on("click", function addScoreToLi() {

    var initials = initial.value;
    var liSc = document.createElement("li");
    liSc.id = scoreArray.length;
    scoreArray.push({ name: initials });
    scoreArray.push({ score: scoreScore })
    scoreBoard.append(liSc);
    liSc.textContent = initials + " " + scoreScore;

    $("#subBtn").hide();



});