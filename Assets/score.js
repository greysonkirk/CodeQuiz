let usersScoreEl = document.querySelector("#usersScore");
let scoreBoard = document.querySelector("#scoreList");
let initial = document.querySelector("#initials");
let scoreArray = [{

}];

//pulling score from local storage
let scoreScore = localStorage.getItem('score')
    //setting the text with score
usersScoreEl.textContent = "You scored " + scoreScore + " points!"
    //getting users initials and adding it to a ol element. 
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