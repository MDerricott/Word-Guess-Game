
function makeMysteryWord(symbol) {
    for (var i = 0; i < gameWord.length; i++) {
        mysteryString.push(symbol);
    }
}



var words = ["JOSHUA","NORAD","WOPR", "SNOHOMISH","LIGHTMAN","PENCIL","DIALUP","WARGAME","FLAKEN","MISSLE","HEARTS","CHESS","BRIDGE","CHECKERS","CHESS","POKER","BACKGAMMON"];
var forFun = ["Wouldn't you prefer a good game of chess?", "Fine.","What is the primary goal?", "Is this a game... or is it real?", "Let's play Global Thermonuclear War.", "People sometimes make mistakes.", "Learn. Learn!"]
var gameWord = words[Math.floor(Math.random() * words.length)];
var mysteryString = [];
var guessedLetters = [];
var wins = 0;
var losses = 0;
var chances = 10;
var misc = []



// Function called to make mystery string//
makeMysteryWord("-");
$(".mystery").text(mysteryString.join(" "));


// when a letter is clicked.  This fuction contains the game//
var theGame = function () {
    document.onkeyup = function (event) {
        var userTyped = event.key;
        $("#warning").empty();
        userLetter = userTyped.toUpperCase();

        for (var i = 0; i < gameWord.length; i++) {
            if (gameWord[i] === userLetter) {
                mysteryString[i] = userLetter;

            }
            else if (!gameWord.includes(userLetter) && !guessedLetters.includes(userLetter)) {
                guessedLetters.push(userLetter);
                chances--;
                if(chances < 8){
                    $("#warning").text(forFun[Math.floor(Math.random() * forFun.length)]);
                }
            

            }
            else if (gameWord.includes(userLetter)) {
                misc.push(userLetter);
                
            }

        }
        $(".mystery").text(mysteryString.join(" "));
        $(".userLetter").text(userLetter);
        $(".guessed").text("Guessed letters: " + guessedLetters.join(" "));
        $(".chances").text("Chances before DEFCON 1: " + chances);
        $(".win").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);

        if (chances === 0) {
            mysteryString = [];
            guessedLetters = [];
            gameWord = words[Math.floor(Math.random() * words.length)];
            makeMysteryWord("-");
            losses++;
            chances = 10;
            $("#warning").text("Greetings. You lose! The only winning move is not to play.");

        } else if (gameWord === mysteryString.join("")) {
            mysteryString = [];
            guessedLetters = [];
            gameWord = words[Math.floor(Math.random() * words.length)];
            makeMysteryWord("-");
            $("#warning").text("Greetings. You win! Select another letter to play again");
            theGame();
            wins++;
            chances = 10;

        }
    }
}

theGame();
console.log(gameWord);
