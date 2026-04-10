// basic set-up variables
let guess = 0;
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let range = 0;
console.log(guess, answer, guessCount, totalWins, range)

const scores = [];
console.log(scores)

// name
let yourName = prompt("Enter your name ");
let formattedName = yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase(); // changes first letter to uppercase; changes rest into lowercase
console.log(yourName, formattedName)


// date and clock
function time() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let suffix;
    if ([11,12,13].includes(day)){
        suffix = "th";
    }
    else if (day % 10 === 1){
        suffix = "st";
    }
    else if (day % 10 === 2){
        suffix = "nd";
    }
    else if (day % 10 === 3){
        suffix = "rd";
    }
    else{
        suffix = "th";
    }

    document.getElementById("date").textContent = months[month] + " " + day + suffix + ", " + year + " " + hours + ":" + String(minutes).padStart(2,'0') + ":" + String(seconds).padStart(2,'0');
}
time();
setInterval(time, 1000);

// basic set-up for HTML linkages
const msg = document.getElementById("msg");
const wins = document.getElementById("wins");
const avgScore = document.getElementById("avgScore");
const guessBtn = document.getElementById("guessBtn");
const playBtn = document.getElementById("playBtn");
const giveUpBtn = document.getElementById("giveUpBtn");
const guessInput = document.getElementById("guess");
const myTimer = document.getElementById("timer");
const e = document.getElementById("e");
const m = document.getElementById("m");
const h = document.getElementById("h");

// images
const reveal = document.getElementById("memeImg"); // refers to selecting image in html
const memes = [".images/21.jpg", ".images/zokunmoz8mi81.jpg", ".images/zewcs60sv6m41.jpg", ".images/ig5u8ke5qo421.png", ".images/ug9hs18m1d831.png", ".images/1643287537640.jpg", ".images/doge_coding_meme.png", ".images/0_kjcbVX8Y9TFoHGDO.png", ".images/programmerhumor-io-programming-memes-frontend-memes-fbba4c4b7ad4701.png", ".images/EXfR6mLXQAID82r.jpg", ".images/programmerhumor-io-programming-memes-6aa5e5e99ca23c3.jpg", ".images/495294327_1947166475817605_783074843163109608_n.jpg", ".images/1_BMdNGcek6kqR5J5pwjQwAw.png", ".images/0_gUmnBbPXyTNTL8hI.jpg", ".images/erroronline42-v0-sk3ae6an0hgd1.webp", ".images/8cdd0ucxrra71.jpg", ".images/r_4394683_eSULD.jpg"]
console.log(memes)


// timer
const times = [];
console.log(times)

let timerId = null;
let fastestTime = Infinity; // first win = always "fastest"
let timeSum = 0;
console.log(timerId, fastestTime, timeSum)

function runTimer() {
    let startTime = new Date().getTime();
    myTimer.textContent = "0.000";
    timerId = setInterval(function() {
        let currentTime = new Date().getTime();
        let elapsed = (currentTime - startTime) / 1000;
        myTimer.textContent = elapsed.toFixed(3);
    }, 10);
}

function stopTimer() {
    clearInterval(timerId);
    let finalTime = parseFloat(myTimer.textContent);
    console.log("Final time:", finalTime);
    return finalTime;
}


// additional functions
function updateScore(score){
    scores.push(score);
    wins.textContent = "Total wins: " + scores.length;
    console.log("Scores array:", scores, "Total wins:", scores.length);

    let sum = 0;
    for(let i = 0; i < scores.length; i++){ // remember, NOT i <= scores.length because scores.length would have empty slot since i starts at 0
        sum += scores[i];
    }
    avgScore.textContent = "Average score: " + (sum/scores.length).toFixed(1) // shows scores with one decimal place
    console.log("Average score:", (sum/scores.length).toFixed(1));

    scores.sort(function(a,b){return a-b;}); // to sort scores by ASCII character

    let lb = document.getElementsByName("leaderboard");
    for(let i = 0; i < lb.length; i++){
        if(i < scores.length){
            lb[i].textContent = scores[i];
        }
        else{
            lb[i].textContent = "--";
        }
    }
}

function resetGame(){
    guessInput.value = ""; // clears guess box
    guessInput.disabled = true;
    guessBtn.disabled = true;
    giveUpBtn.disabled = true;
    playBtn.disabled = false;

    e.disabled = false;
    m.disabled = false;
    h.disabled = false;
}

guessInput.disabled = true;


// play button function
playBtn.addEventListener("click", play);
function play(){
    let levels = document.getElementsByName("level") // .getElementsByName = gets all elements from HTML with "[name]"
    for(let i=0; i < levels.length; i++){
        if(levels[i].checked){
            range = parseInt(levels[i].value);
        }
        levels[i].disabled = true;
    }
    msg.textContent = "Hello, " + formattedName + "! Guess a number 1-" + range + ".";
    answer = Math.floor(Math.random()*range) + 1;
    guessCount = 0;
    console.log(answer)
    console.log(guessCount)

    let randomIndex = Math.floor(Math.random() * memes.length); // randomizes mystery image whenever new game starts (based on how many images are there in array) --> similar to how mystery number is randomized (see above)
    document.getElementById("memeImg").src = memes[randomIndex];
    console.log("Random image index:", randomIndex, "Image:", memes[randomIndex]);

    reveal.className = "";  // clear previous blur level of image
    reveal.className = "blur20";  // sets default blur

    guessInput.disabled = false;
    guessBtn.disabled = false;
    giveUpBtn.disabled = false;
    playBtn.disabled = true;

    runTimer();
    }

// guess button function --> MAIN PART OF GAME
guessBtn.addEventListener("click", makeGuess);
function makeGuess(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < 1 || guess > range){
        msg.textContent = "Please enter a VALID number.";
        return // gets us out of this function makeGuess()
    }

    guessCount++;
    console.log("Guess:", guess, "Answer:", answer, "Difference:", Math.abs(guess - answer), "Guess count:", guessCount);

    if(guess == answer){
        msg.textContent = "Correct! You guessed it! It took " + guessCount + " tries, " + formattedName + "!";
        if(guessCount == 1){
            msg.textContent = "Correct! You guessed it! It took 1 try (you're a good guesser, " + formattedName + ").";
    
        }

        let finalTime = stopTimer();
        times.push(finalTime);
        if (finalTime < fastestTime){
            fastestTime = finalTime;
            document.getElementById("fastest").textContent = "Fastest Game: " + fastestTime.toFixed(3) + "s";
        }

        timeSum = 0;
        for(let i = 0; i < times.length; i++){
            timeSum += times[i];
        }
        document.getElementById("avgTime").textContent = "Average Time: " + (timeSum / times.length).toFixed(3) + "s";
        console.log("Times array:", times, "Fastest:", fastestTime, "Avg time:", (timeSum / times.length).toFixed(3));

        reveal.className = "";
        reveal.className = "blur0";
        
        updateScore(guessCount);
        resetGame();
    }
    
    else if(Math.abs(guess - answer) <= 2 && guess > answer){ // if guess is 2 more/less than answer & guess > answer
        msg.textContent = "HOT! IT'S HOT! You're guess is really close! Just a little too HIGH.";
        
        reveal.className = "";
        reveal.className = "blur5";
    }
    else if(Math.abs(guess - answer) <= 2 && guess < answer){ // if guess is 2 more/less than answer & guess < answer
        msg.textContent = "HOT! IT'S HOT! You're guess is really close! Just a little too LOW.";
        
        reveal.className = "";
        reveal.className = "blur5";
    }
    else if(Math.abs(guess - answer) <= 5 && guess > answer){ // if guess is 10 more/less than answer & guess > answer
        msg.textContent = "Getting warmer ... You're still a little too HIGH.";

        reveal.className = "";
        reveal.className = "blur10";
    }
    else if(Math.abs(guess - answer) <= 5 && guess < answer){ // if guess is 10 more/less than answer & guess < answer
        msg.textContent = "Getting warmer ... You're still a little too LOW.";
    
        reveal.className = "";
        reveal.className = "blur10";
    }
    else if(guess > answer){
        msg.textContent = "Brr! You're cold! Your guess is too HIGH. Try again!";
    
        reveal.className = "";
        reveal.className = "blur20";
    }
    else{
        msg.textContent = "Brr! You're cold! Your guess is too LOW. Try again!";
    
        reveal.className = "";
        reveal.className = "blur20";
    }
    
}


// give up button function
giveUpBtn.addEventListener("click", giveUp);
function giveUp(){
    msg.textContent = "The answer is: " + answer + ". It took " + guessCount + " tries before you gave up.";
    stopTimer();  // stop, but don't record the time
    updateScore(range);
    resetGame();
}


// dark mode toggle function
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark"); // goes to CSS and activates functions w/ .dark
    this.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});