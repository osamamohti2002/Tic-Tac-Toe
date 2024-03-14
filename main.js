var wins = document.getElementById("wins");
var winNummer= 0;
var aiWinNummer = 0;
var aiWins = document.getElementById("aiwins");
var aiNumOfWins = document.getElementById("numOfAiWins");


let turn = 'x';
let spelerx  = "x";
let spelero  = "o";

//deze functie bestaat om de game te starten. en eerste beurt aan x geven daarna aan o.
function startGame(id){

    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'x'
        turn = 'o';
    }
    else if(turn === 'o' && element.innerHTML === ''){
        element.innerHTML = 'o'
        turn = 'x';
    }
    checkForWin();
}
//deze functie bestaat om de winaar te chicken en bepaald wie wint .
function checkForWin(){
// speler wint
    if((b1.innerHTML === spelerx) && (b2.innerHTML === spelerx) && (b3.innerHTML === spelerx)) {
        clearBoard(spelerx);
        send_to_database();
        game_has_finished();
    }
    if((b4.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b6.innerHTML === spelerx)) {
        clearBoard(spelerx);
        send_to_database();
        game_has_finished();
    }
    if((b7.innerHTML === spelerx) && (b8.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    // Verticle Wins
    if((b1.innerHTML === spelerx) && (b4.innerHTML === spelerx) && (b7.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b2.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b8.innerHTML === spelerx)) {
        clearBoard(playerMark);
    }
    if((b3.innerHTML === spelerx) && (b6.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    // Diagonal
    if((b1.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b9.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }
    if((b3.innerHTML === spelerx) && (b5.innerHTML === spelerx) && (b7.innerHTML === spelerx)) {
        clearBoard(spelerx);
    }

// spelero win

    if((b1.innerHTML === spelero) && (b2.innerHTML === spelero) && (b3.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b4.innerHTML === spelero) && (b5.innerHTML === spelero) && (b6.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b7.innerHTML === spelero) && (b8.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }
// Verticale Wins
    if((b1.innerHTML === spelero) && (b4.innerHTML === spelero) && (b7.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b2.innerHTML === spelero) && (b5.innerHTML === spelero) && (b8.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b3.innerHTML === spelero) && (b6.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }
// Digetaal wins/
    if((b1.innerHTML === spelero) && (b5.innerHTML === spelero) && (b9.innerHTML === spelero)) {
        clearBoard(spelero);
    }
    if((b3.innerHTML === spelero) && (b5.innerHTML === spelero) && (b7.innerHTML === spelero)) {
        clearBoard(spelero);
    }
}



//deze funtie bestaat om opnieu te kunnen starten (restart van de game)
function clearBoard(winner) {
    if(winner == spelerx) {
        wins.innerHTML = "Jij wint";
        winNummer++;
        numOfWins.innerHTML = winNummer;
    }
    else {
        wins.innerHTML = "Jij verliest";
        numOfAiWins.innerHTML = "AI Wint";
        aiWins.innerHTML = "speler 2 Win";
        aiWinNummer++;
        aiNumOfWins.innerHTML = aiWinNummer;
    }
    // de bord leeg maken

   b1.innerText = '';
   b2.innerText = '';
   b3.innerText = '';
   b4.innerText = '';
   b5.innerText = '';
   b6.innerText = '';
   b7.innerText = '';
   b8.innerText = '';
   b9.innerText = '';
}

//deze functie om scoor toevoegen naar database

function send_to_database(message) {
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
            if (objXMLHttpRequest.status === 200) {
                alert("yay gelukt!");
            } else {
                alert('Error Code: ' + objXMLHttpRequest.status);
                alert('Error Message: ' + objXMLHttpRequest.statusText);
            }
        }
    }
    objXMLHttpRequest.open('GET', 'scoor-toevogen.php?hogescoor=' + message);
    objXMLHttpRequest.send();
}

function game_has_finished() {
    send_to_database(hogescoor)
}





