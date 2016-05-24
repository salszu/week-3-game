$(document).ready(function() {
    // ready debug
    console.log("READY!");

    // variables
    var wins = 0;
    var losses = 0;
    var roboChoices = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var redX = $('#redX2')
    var guessesLeft = 6;
    //var usedLetter = [possibleChoices - ]
    //resetting wins/losses/guesses
    document.getElementById('wins').innerHTML = '0';
    document.getElementById('losses').innerHTML = '0';
    document.getElementById('guessesLeft').innerHTML = '6';

    alert("GOOD LUCK!");
    var roboGuess = roboChoices[Math.floor(Math.random() * roboChoices.length)];
    console.log(roboGuess);

    document.onkeyup = function startAgain() {

        //if-elseIf-else grouping
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if ((userGuess == roboGuess) && (guessesLeft > 0)) {
            alert("YOU HAVE WON");
            document.getElementById('wins').innerHTML = (wins++);
        } else if ((userGuess != roboGuess) && (guessesLeft > 0)) {
            guessesLeft--;
            document.getElementById('guessesLeft').innerHTML = (guessesLeft);
        } else {
            alert("The computers have won. I, for one, welcome our new robotic overlords.");
            document.getElementById('losses').innerHTML = (losses++);
        }
        //infinite loops, what.	
        startAgain();


    };



});
//var html = 

//$('#resetButton').on("click", function(){
//document.getElementById('guessesLeft').innerHTML= 'no';




//randomizer for choosing a word to start with 
//var choice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];	

//onkeyup 
//document.getElementById("letters").onkeyup = function(){

//var keyPress = document.getElementById("letters");

//onkeyUP#2?
//document.onkeyup = function(event) {
//var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//}

// creating underscores for the chosen words for loop
//for( var i = 0; i <= words.length; i++) {



//document.getElementById('uScores').innerHTML= ;
//}


//use css to create the underscores?   border-bottom: 1px solid black;



//


// need to code a function for when possiblechoices =/= wordX, redX becomes visible 
// another one becomes visible
