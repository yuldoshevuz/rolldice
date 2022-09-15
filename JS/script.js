// buttons
const newGameBtn = document.querySelector('.btn--new')
const rollDiceBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
// dice img
const dice = document.querySelector('.dice')
dice.style.display = 'none'

let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let newGame = true

function switchPlayer() {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}

rollDiceBtn.addEventListener('click', (e) => {
    if (newGame) {
        const random = Math.trunc(Math.random() *6) +1
        dice.src = `./img/dice-${random}.png`
        dice.style.display = 'block'
    
        if (random !== 1) {
            currentScore += random
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }
    }
})

holdBtn.addEventListener('click', (e) => {
    if (newGame) {
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer] += currentScore
        if(score[activePlayer] >= 100) {
            newGame = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        } else {
            switchPlayer()
        }
    }
})

newGameBtn.addEventListener('click', (e) => {
    currentScore = 0
    score = [0, 0]
    newGame = true
    document.getElementById('current--0').textContent = 0
    document.getElementById('current--1').textContent = 0
    document.getElementById('score--0').textContent = 0
    document.getElementById('score--1').textContent = 0
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    switchPlayer()
})