// add javascript here
let guess = 0;
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let name = prompt("Enter your name ");
const scores = [];

document.getElementById("playBtn").addEventListener("click", play);
function play(){
    let range = 0;
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

document.getElementById("guessBtn").addEventListener("click", attempt);
function attempt(){
    if(guess == isNaN){
        
    }
    if(guess > answer){

    }
    if(guess < answer){

    }
    else{

    }
}

document.getElementById("giveUpBtn").addEventListener("click", giveup);
function giveup(){

}