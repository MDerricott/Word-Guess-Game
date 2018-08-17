
function makeMysteryWord(symbol) {
    for (var i = 0; i < gameWord.length; i++) {
        mysteryString.push(symbol);
    }
}



var words = ["PROPERTY", "CLASSES", "ARRAYS"];
var gameWord = words[Math.floor(Math.random() * words.length)];
var mysteryString = [];
var guessedLetters = [];
var wins = 0;
var losses = 0;
var chances = 10;
var misc = []



// Function called to make mystery string//
makeMysteryWord("-");


// when a letter is clicked.  This fuction contains the game//
var theGame = function () {
    document.onkeyup = function (event) {
        var userTyped = event.key;
        console.log("new game")
        userLetter = userTyped.toUpperCase();


        // if(chances === 0){
        //     mysteryString = [];
        //     guessedLetters = [];
        //     gameWord = words[Math.floor(Math.random() * words.length)]; 
        //     makeMysteryWord("-");
        //     losses++;
        //     chances = 10;
        //     $("#warning").text("You lose! Select another letter to play again");

        // }else{
        // if(gameWord === mysteryString.join("")){
        //     mysteryString = [];
        //     guessedLetters = [];
        //     gameWord = words[Math.floor(Math.random() * words.length)]; 
        //     makeMysteryWord("-");
        //     $("#warning").text("You win! Select another letter to play again");
        //     theGame();
        //     wins++;
        //     chances = 10;
        // }
        // else{
        for (var i = 0; i < gameWord.length; i++) {
            if (gameWord[i] === userLetter) {
                mysteryString[i] = userLetter;
                // if(gameWord === mysteryString.join("")){
                //     var youDidIt = "You guessed it!";
                //     $("#warning").append(youDidIt);
                //         theGame();}




            }
            else if (!gameWord.includes(userLetter) && !guessedLetters.includes(userLetter)) {
                guessedLetters.push(userLetter);
                chances--;
                // if(chances === 0){
                //     var lastChance = "One guess left";
                //     $("#warning").append(lastChance);

                //     // alert("You Lose.  The word is " + gameWord);   
                // }

            }
            else if (gameWord.includes(userLetter)) {
                misc.push(userLetter);
                // if(gameWord === mysteryString.join("")){
                //     var youDidIt = "You guessed it!";
                //     $("#warning").append(youDidIt);
                //     theGame();

                // }
            }

        }
        var html =
        "<p>You chose: " + userLetter + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>chances: " + chances + "</p>" +
        "<p>Guesses: " + guessedLetters.join(" ") + "</p>" +
        "<p>mystery: " + mysteryString.join(" ") + "</p>";
        document.querySelector("#game").innerHTML = html;

        // Calulate wins//    
        // if(chances > 0 && mysteryString === gameWord);{
        // // if( mysteryString.join("") === gameWord){
        //     wins++;
        //     gameWord = words[Math.floor(Math.random() * words.length)]; 
        //     mysteryString =  makeMysteryWord("-");
        //     // alert("you win!");
        //     // gameWord =  gameWord;
        //     // mysteryString =  makeMysteryWord("-",words);}



        console.log(mysteryString);


        // for(var i = 0; i < guessedLetters.length; i++){
        //     for(var j = 0; j< gameWord.length; j++){
        //         if(gameWord[j] === guessedLetters[i]){
        //         guessedLetters.splice(j,1);}
        //     }}



        //             // guessedLetter.push(userLetter);
        //             console.log("guessed letters" + guessedLetters)

        //         console.log("MYSTERY" + mysteryString);  


        //     // mysteryString[i] = gameWord[i];
        //         // console.log(mysteryString[i]);
        //         // console.log(gameWord[i]);
        //         // console.log(userLetter);
        // // guessedLetter.push(userLetter);



        console.log("mystery " + mysteryString);
        console.log("guessed " + guessedLetters);
        console.log("wins " + wins);
        console.log(losses);
        console.log(chances);




        if (chances === 0) {
            mysteryString = [];
            guessedLetters = [];
            gameWord = words[Math.floor(Math.random() * words.length)];
            makeMysteryWord("-");
            losses++;
            chances = 10;
            $("#warning").text("You lose! Select another letter to play again");

        } else if (gameWord === mysteryString.join("")) {
            mysteryString = [];
            guessedLetters = [];
            gameWord = words[Math.floor(Math.random() * words.length)];
            makeMysteryWord("-");
            $("#warning").text("You win! Select another letter to play again");
            theGame();
            wins++;
            chances = 10;

        }
    }
}

theGame();
console.log(gameWord);
