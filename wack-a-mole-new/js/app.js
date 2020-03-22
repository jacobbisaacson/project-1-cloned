console.log("wack a mole");

class Player {
  constructor(obj) {
    this.name = name
    this.playerScore = score
  }
}

const game = {
    playerScore: 0, // in CL -- when game.player (after game.addPLayer() -- shows the correct score (current score)
    // playerNum: null,
    name: [], // in CL -- when game.player -- name is undefined... why? object object?
    player: null,

    addPlayer: function(str) {
        const player1 = new Player(str)
        this.name = str
        this.player = player1

    },

    start: function() {
        button = document.querySelector('.button')
        button.onclick = function() {
            const mole = document.createElement("div")
            mole.id = "mole"

            setInterval(() => {
                timer = Math.random()

                if (timer > 0.85) {
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

            score = 0
            moles = document.getElementsByClassName(`col`)

            for (let i = 0; i < moles.length; i++) {
                moles[i].onclick = function(e) {
                    if (e.currentTarget.innerHTML == "") {
                        score -= 1
                        // pTwoScore += -1
                    } else {
                        score += 2
                        // pTwoScore += 2
                    }
                    document.querySelector('.player-one-score').innerText = score
                    // document.querySelector('.player-two-score').innerText = pTwoScore

                    // how to keep the player1 and player 2 text in the box?

                }
            }
        }
    }
}
game.start()

//make timer to shut it off for each turn
//give player 2 a turn
//connect scoring to player 2's scoreboard
// score and moles should be outside of the methods and in the STATE, but cant for some reason, doe stha tmatteR?

