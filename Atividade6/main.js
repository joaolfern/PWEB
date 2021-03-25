const gameBoard = document.querySelector('.game-board')
const gameButtons = Array.from(document.querySelectorAll('.game-button'))
const playerMove = document.querySelector('.player-move')
const pcMove = document.querySelector('.pc-move')
const playButton = document.querySelector('.play')
const results = document.querySelector('.results')
const result = document.querySelector('.result')

const moves = {
    0: 'Pedra',
    1: 'Papel',
    2: 'Tesoura'
}

const calcResult = {
    '0': {
        '0': 'Empate',
        '1': 'Derrota',
        '2': 'Vitória'
    },
    '1': {
        '0': 'Vitória',
        '1': 'Empate',
        '2': 'Derrota'
    },
    '2': {
        '0': 'Derrota',
        '1': 'Vitória',
        '2': 'Empate'
    }
}

playButton.addEventListener('click', () => {
    gameBoard.classList.add('show')
    results.classList.remove('show')
})

gameButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const randomMove = getMove()

        gameBoard.classList.remove('show')
        results.classList.add('show')

        playerMove.innerHTML = moves[button.value]
        pcMove.innerHTML = moves[Number(randomMove)]
        result.innerHTML = getResult(button.value, randomMove)
    })
})

function getMove() {
    return Math.floor(Math.random() * Math.floor(3));
}

function getResult(player, pc) {
   return calcResult[player][pc]
}