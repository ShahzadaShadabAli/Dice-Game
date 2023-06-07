const heading = document.querySelector('.heading')
const playBtn = document.querySelector('.btn')
const player1Img = document.querySelector('#player-1-img')
const player2Img = document.querySelector('#player-2-img')

//Arrays
const dice = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6']

let player1dice = 0
let player2dice = 0

//Get Random Img for Player 1
function getRandomNum1() {
    player1dice = Math.floor(Math.random() * dice.length) 
    player1Img.src = `./images/${dice[player1dice]}.png`
}

function getRandomNum2() {
    player2dice = Math.floor(Math.random() * dice.length) 
    player2Img.src = `./images/${dice[player2dice]}.png`
}

function winnerSelection() {
    if (player1dice > player2dice) {
        heading.textContent = 'Player 1 Won!'
    } else if (player1dice < player2dice) {
        heading.textContent = 'Player 2 Won!'
    } else {
        heading.textContent = "It's a Draw!"
    }
}

function start() {
    getRandomNum1()
    getRandomNum2()
    winnerSelection()
}

//Event Listeners
playBtn.addEventListener('click', start)