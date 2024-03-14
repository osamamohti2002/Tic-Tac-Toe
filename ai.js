const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
var wins = document.getElementById("wins");
var numOfWins = document.getElementById("numOfWins");
var winCount = 0;
var aiWinCount = 0;
var aiWins = document.getElementById("aiwins");
var aiNumOfWins = document.getElementById("numOfAiWins");


var arr = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

var Turn = true;
spelerx = "X";
spelero = "O";
var markColor = "white";

//deze functie bestaat om de game te starten. en eerste beurt aan x geven daarna aan o.
function startGame(thisBox) {

    if (Turn) {
        //om ervoor te zorgen voor de eerste game
        wins.innerHTML = "";
        //het maken van de gebruiker selectie
        document.getElementById(thisBox).classList.toggle("fade");
        document.getElementById(thisBox).innerHTML = spelerx;
        document.getElementById(thisBox).style.color = markColor;

        // Droppen uit de array
        arr.splice(arr.indexOf(thisBox),1);
        // verander de beurt
        Turn = !Turn;
        checkForWin();
        // zorg ervoor dat hetzelfde niet voorbij is
        if( wins.innerHTML !== "You Win") {
            aiTurn();

        }
    }

}



function aiTurn() {


    // de beurt aan de pc
    while(!Turn) {
        // selecteer uit array // selecteer Move
        tryMove = arr[Math.floor(Math.random()*arr.length)];
        console.log("tryMove " + String(tryMove));
        if(document.getElementById(tryMove).innerHTML === "o") {
            // verwijderen uit array
            arr.splice(arr.indexOf(tryMove),1);
            // selecteer de pc turn
            document.getElementById(tryMove).classList.toggle("fade");
            document.getElementById(tryMove).innerHTML = "O";
            document.getElementById(tryMove).style.color = "white";
            // geef de beurt terug aan de PC
            Turn = !Turn;
            checkForWin();
        }

    }
    console.log(arr);
}

function checkForWin() {
    // spelerx wint

    if((b1.innerHTML === spelerx) && (b2.innerHTML === spelerx) && (b3.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b4.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b6.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b7.innerHTML === spelerx) && (b8.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    // Verticale Wins
    if((b1.innerHTML === spelerx) && (b4.innerHTML === spelerx) && (b7.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b2.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b8.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b3.innerHTML === spelerx) && (b6.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    // Digitaal wint
    if((b1.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b3.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b7.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
// pc Wins
// spelero wint

    if((b1.innerHTML === spelero) && (b2.innerHTML === spelero) && (b3.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b4.innerHTML === spelero) && (b5.innerHTML === spelero) && (b6.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b7.innerHTML === spelero) && (b8.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }

    if((b1.innerHTML === spelero) && (b4.innerHTML === spelero) && (b7.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b2.innerHTML === spelero) && (b5.innerHTML === spelero) && (b8.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b3.innerHTML === spelero) && (b6.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }
// Digitaal wins
    if((b1.innerHTML === spelero) && (b5.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b3.innerHTML === spelero) && (b5.innerHTML === spelero) && (b7.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    matchGelijk();
}

var grid = document.getElementById("grid").children;



function clearBoard(winner) {
    if(winner === spelerx) {
        wins.innerHTML = "You Win";
        winCount++;
        numOfWins.innerHTML = winCount;
    }
    else {
        wins.innerHTML = "You Lose";
        numOfAiWins.innerHTML = "AI Wins";
        aiWins.innerHTML = "Ai Wins";
        aiWinCount++;
        aiNumOfWins.innerHTML = aiWinCount;
    }
    // de bord leeg maken

    for (i = 0; i < grid.length; i++) {
        grid[i].classList.remove("fade");
        grid[i].innerHTML = "o";
        grid[i].style.color = "#4CAF50";
    }
    // restart de Game

    wins.style.color = "white";
    Turn = true;
    arr = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

    return;
}

function matchGelijk() {
    //alert("controleren de win");
    if((b1.innerHTML !== "o") && (b2.innerHTML !== "o") && (b3.innerHTML !== "o") && (b4.innerHTML !== "o") &&(b5.innerHTML !== "o") &&(b6.innerHTML !== "o") &&(b7.innerHTML !== "o") &&(b8.innerHTML !== "o") &&(b9.innerHTML !== "o")) {
        wins.innerHTML = "match is gelijk";
        for (i = 0; i < grid.length; i++) {
            grid[i].classList.toggle("fade");
            grid[i].innerHTML = "o";
            grid[i].style.color = "#4CAF50";
        }
        Turn = true;
        arr = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];


    }
}