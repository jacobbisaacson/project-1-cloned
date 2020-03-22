console.log("wack a mole");

class Player {
    constructor() {
        this.name = name
        // this.playerScore = score
        // this.turn = turn
        this.turn = true
    }

    setTurn() {
        this.turn = false
    }
}

///// FOR TIM HELP /////
// 1. need to set up a timer so that each turn has 30 seconds
// 2. doing the time, so that I can set up the next players turn (to actually make it a 2 player game)
// 3. RQ -- adding images to the moles, instead of the red circles
// 4. score and moles are defined INSIDE of the start --> setInterval method.  Does that matter?  Shouldn't be in the CLASS?
// 5. for timer -- does switiching players need to happen in that method?




const game = {
    playerScore: 0, // in CL -- when game.player (after game.addPLayer() -- shows the correct score (current score)
    // playerNum: null,
    names: [], // in CL -- when game.player -- name is undefined... why? object object?
    players: [],
    timeElapsed: 0,
    intervalID: null,

    addPlayers: function() {
        for (let i = 0; i < 2; i++) {
            const player1 = new Player()
            this.players = player1
            player1.name = "Player One"

        }
    },

    checkTurn: function() {
        // maybe set the turn timer first, 
        // then a series of if statements, if the turntimer has expired, then shifts turns
        // 
    },

    switchTurn: function() {
        if (game.timeElapsed >= 15) {
            setTurn() // this isn't working (not changing to false)
        }
    },

    // addPlayer2: function() {
    //     const player2 = new Player()
    //     this.players = player2
    //     player2.name = "Player Two"

    // },

    start: function() {
        button = document.querySelector('.button')
        button.onclick = function() {
            const mole = document.createElement("div")
            mole.id = "mole"

            setInterval(() => {
                timer = Math.random()

                if (timer > 0.90) {
                    cols = document.querySelectorAll(`.row .col`)
                    for (let i = 0; i < cols.length; i++) {
                        // console.log(""
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

            score = 0 // where the score starts when the button to start the game is clickd
            moles = document.getElementsByClassName(`col`)

            for (let i = 0; i < moles.length; i++) {
                moles[i].onclick = function(event) {
                    if (event.currentTarget.innerHTML == "") {
                        score -= 1
                        // gotta get player 2 score stuff in here
                    } else {
                        score += 2
                        // gotta get player 2 score stuff in here
                    }
                    document.querySelector('.player-one-score').innerText = "Player 1 Score: " + score // (player 1 score only?)
                    // document.querySelector('.player-two-score').innerText = "Player 2 Score: " + score (player 2 score only?)

                }
            }
        }
        game.startTimer()
        game.addPlayers()
    },

    startTimer: function() {
        this.intervalID = setInterval(() => {
            this.timeElapsed++
        }, 1000)

    },

    stopTimer: function() {
        if (game.timeElapsed >= 15) {
            clearInterval(this.intervalID)
            return
        }
        // console.log(
    }

    // window.setInterval(play(opp,player),100);
}
game.start()


//connect scoring to player 1's scoreboard -- done
//do the same for player 2's once its set up with a turn