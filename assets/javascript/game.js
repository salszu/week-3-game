
$(document).ready(function(){
	// ready debug
	console.log("READY!");

	// variables
	var letters = 0;
	var wins = 0;
	var losses = 0;	
	var word = ['b', 'a', 'r', 'l', 'e', 'y'];
	var possibleChoices = ['a', 'b', 'c', 'd', 'e',
	'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var redX = 0;
	//var usedLetter = [possibleChoices - ]
	//resetting wins/losses/guesses
	document.getElementById('wins').innerHTML = '0';
	document.getElementById('losses').innerHTML=  '0';
	document.getElementById('guessesLeft').innerHTML= "6";

		//randomizer for choosing a word to start with 
    	var choice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];	

		//onkeyup 
		document.getElementById("letters").onkeyup = function(){

			var keyPress = document.getElementById("letters");

		//onkeyUP#2?
			document.onkeyup = function(event) {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			}

		};	


		// creating underscores for the chosen words for loop
		for( var i = 0; i <= words.length; i++) {
			


			//document.getElementById('uScores').innerHTML= ;
		}
		

		//use css to create the underscores you fucking jackass  border-bottom: 1px solid black;

		

		//

    		
		// need to code a function for when possiblechoices =/= wordX, redX becomes visible 
		// another one becomes visible

		
    	







