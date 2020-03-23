console.log("wack a mole");

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }
}

const game = {
    // playerScore: 0, // in CL -- when game.player (after game.addPLayer() -- 
    // shows the correct score (current score) <--this is now activeplayer.score
    players: [],
    activePlayer: null,
    timeElapsed: 10,
    intervalID: null,

    addPlayers: function() {
        const player1 = new Player("Player One")
        this.players.push(player1)
        const player2 = new Player("Player Two")
        this.players.push(player2)
        this.activePlayer = this.players[0]
    },

    switchTurn: function() {
        // game.stopTimer() // if (this.timeElapsed === 0) {
        if (this.players.length >= 2 && this.activePlayer === this.players[0]) {
            this.activePlayer = this.players[1]
        } else {
            this.activePlayer = this.players[0]
        }
        game.startTimer()

    },

    start: function() {
        // if (this.activeplayer === this.players[0]) {
        // if (this.timeElapsed === 0) { 
        button = document.querySelector('.button')
        button.onclick = function() {
            const mole = document.createElement("div")
            mole.id = "mole"

            setInterval(() => {
                timer = Math.random()

                if (timer > 0.90) {
                    cols = document.querySelectorAll(`.row .col`)
                    for (let i = 0; i < cols.length; i++) {
                        cols[i].innerHTML = ""
                    }
                    return
                }
                if (timer > 0.5) {
                    return
                }

                randRow = Math.floor(Math.random() * 3) + 1
                randCol = Math.floor(Math.random() * 3) + 1
                document.querySelector(`.row${randRow} .col${randCol}`).appendChild(mole)
            }, 600)

            score = 0 // where the score starts when the button to start the game is clicked
            moles = document.getElementsByClassName(`col`)

            for (let i = 0; i < moles.length; i++) {
                moles[i].onclick = function(event) {
                    if (event.currentTarget.innerHTML == "") {
                        score -= 1 // this.activePlayer.score
                    } else {
                        score += 2 // this.activePlayer.score
                        // gotta get player 2 score stuff in here
                    }
                    document.querySelector('.player-one-score').innerText = "Player One Score: " + score // (player 1 score only?)
                    // document.querySelector('.player-two-score').innerText = "Player 2 Score: " + score // (player 2 score only?)
                    // }

                }
            }
        }

        game.startTimer()
        game.addPlayers()
    },

    startTimer: function() {
        this.intervalID = setInterval(() => {
            this.timeElapsed--
            if (this.timeElapsed === 0) {
                this.stopTimer()
            }
        }, 1000)

    },

    stopTimer: function() {
        clearInterval(this.intervalID)
        this.timeElapsed = 10
        game.switchTurn() // this works -- changes the active player from 1 to 2 and back everytime.
        console.log(game.activePlayer);

    }
}

game.start()

// window.setInterval(play(opp,player),100);

// addPlayer2: function() {
//     const player2 = new Player()
//     this.players = player2
//     player2.name = "Player Two"

// },

// checkTurn: function() {
//     // maybe set the turn timer first, 
//     // then a series of if statements, if the turntimer has expired, then shifts turns
//     // 
// },


//connect scoring to player 1's scoreboard -- done
//do the same for player 2's once its set up with a turn




///// FOR TIM HELP /////
// 1. need to set up a timer so that each turn has 30 seconds
// 2. doing the time, so that I can set up the next players turn (to actually make it a 2 player game)
// 3. RQ -- adding images to the moles, instead of the red circles
// 4. score and moles are defined INSIDE of the start --> setInterval method.  Does that matter?  Shouldn't be in the CLASS?
// 5. for timer -- does switiching players need to happen in that method?








