// add javascript here
let guess = 0;
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let range = 0;
let yourName = prompt("Enter your name ");
const scores = [];

document.getElementById("playBtn").addEventListener("click", play);
function play(){
    let levels = document.getElementsByName("level") // .getElementsByName = gets all elements from HTML with "[name]"
    for(let i=0; i < levels.length; i++){
        if(levels[i].checked){
            range = parseInt(levels[i].value);
        }
        levels[i].disabled = true;
    }
    document.getElementById("msg").textContent = "Guess a number 1-" + range;
    answer = Math.floor(Math.random()*range) + 1;
    guessCount = 0;

    guessBtn.disabled = false;
    giveUpBtn.disabled = false;
    playBtn.disabled = true;
}

document.getElementById("guessBtn").addEventListener("click", makeGuess);
function makeGuess(){
    let guess = parseInt(document.getElementById("guess").value);
    if(isNaN(guess) || guess < 1 || guess > range){
        msg.textContent = "Please enter a VALID number.";
        return // gets us out of this function makeGuess()
    }

    guessCount++;
    if(guess == answer){
        msg.textContent = "Correct! You guessed it! It took " + guessCount + " tries";
        if(guessCount == 1){
            msg.textContent = "Correct! You guessed it! It took 1 try (you're a good guesser " + yourName + " ).";
        }
    }
    else if(guess < answer){
        msg.textContent = "Too LOW. Try again!";
    }
    else{
        msg.textContent = "Too HIGH. Try again!";
    }
    updateScore(guessCount); // make sure this only hppens when we wWIN
    resetGame();
}

function updateScore(score){
    scores.push(score);
    wins.textcontent = "Total wins: " + scores.length;

    let sum = 0;
    for(let i = 0; i < scores.length; i++){ // remember, NOT i <= scores.length because scores.length would have empty slot since i starts at 0
        sum += scores[i];
    }
    avgScore.textContent = "Average score: " + (sum/scores.length).toFixed(1) // shows scores with one decimal place

    scores.sort(function(a,b){return a-b;}); // to sort scores by ASCII character

    let lb = document.getElementsByName("leaderboard");
    for(let i = 0; i < lb.length; i++){
        if(i < scores.length){
            lb[i].textContent = scores[i];
        }
    }
}

function resetGame(){
    guess.value = ""; // clears the guess box
    guessBtn.disabled = true;
    giveUpBtn.disabled = true;
    playBtn.disabled = false;
    e.disabled = false;
    m.disabled = false;
    h.disabled = false;

}

document.getElementById("giveUpBtn").addEventListener("click", giveUp);
function giveUp(){

}