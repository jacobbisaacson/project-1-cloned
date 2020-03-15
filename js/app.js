console.log("project 1");

const game = {

	let scorePlayerOne = 0,
	let scorePlayerTwo = 0,
	let timerIntervalID = null,
	let timeElapsed = 0,


	start: function() {
	// start game/main timer -- the 30 second timer that each player's turn will have
	// call next function -- should be "showMole"

	},

	showMole: function() {
	// mole image appears in random box in the container
	// has to have it's own separate timer for how long the mole image should stay visable in it's current spot
	// needs to disappear when event (click) happens on it (target)
	// if user hits (clicks on the mole image), then it should just show another mole, and continue to until
	// the player's turn timer expires (30 seconds)
	// needs to call next function -- should be "change turns" or something
	},

	nextPlayersTurn: function() {
	// calls showMole again... 
	// can't do alerts, so need to figure out how to change turns without it
	// should run the same way as the last turn
	},

	createSquares: function() {

	},

	printSquares: function() {

	},

	checkValidWack: function() {

	},

	




























//// LISTENERS ////
// const holes = document.querySelectorAll('.hole')
// const scoreBoard = document.querySelectorAll('.scoreBoard')
// const moles = document.querySelectorAll('.mole')
// const button = document.querySelectorAll('button')

// mole.addEventListener('click', ___) // or on.('click', event)