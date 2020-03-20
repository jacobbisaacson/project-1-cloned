console.log("wack a mole");

class Player {
  constructor() {
    
  }
}

const game = {

    start: function() {
        let button = document.querySelector('.button')
        button.onclick = function() {
            const mole = document.createElement("div")
            mole.id = "mole"

            setInterval(() => {
                let timer = Math.random()

                if (timer > 0.85) {
                    let cols = document.querySelectorAll(`.row .col`)
                    for (let i = 0; i < cols.length; i++) {
                        // console.log("dissappearing");
                        cols[i].innerHTML = ""
                    }
                    return
                }
                if (timer > 0.5) {
                    return
                }

                let randRow = Math.floor(Math.random() * 3) + 1
                let randCol = Math.floor(Math.random() * 3) + 1
                document.querySelector(`.row${randRow} .col${randCol}`).appendChild(mole)
            }, 500)

            let score = 0
            let moles = document.getElementsByClassName(`col`)

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

                }
            }
        }
    }
}
game.start()

//make timer to shut it off for each turn
//give player 2 a turn
//connect scoring to player 2's scoreboard
//