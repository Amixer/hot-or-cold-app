'use strict'

$(document).ready(pageLoad);

	function pageLoad() {
	/*--- Display information modal box ---*/
  		$(".what").click(function(){
    		$(".overlay").fadeIn(1000);
  		});
  	/*--- Hide information modal box ---*/
  		$("a.close").click(function(){
  			$(".overlay").fadeOut(1000);
  		});


	};

/* CPU selects a # between 1-100 */
function numGen(){
cpuNumber = Math.floor(Math.random()*100)+1;
};
/* User guesses*/
function userGuess() {
	var userNum = input.val();
};

if (cpuNumber === userNum) {
	document.write("You Win!");
}
else if (cpuNumber < )
/* Check the guess 
/*
/* Display message if user guesses the right number
/* Display message if user is less than 10 from the right number
/* Display essage if user is less than 20 from the right number
/* Display message if user is more than 30 away from the right number.

/* Start NewGame Function */