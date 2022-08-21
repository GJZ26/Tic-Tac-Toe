let isRedTurn = false
titleGame.textContent = Lang.title
instruction.textContent = Lang.instruction
const celdas = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9')
]

function turnOf() {
    if (isRedTurn) {
        titleGame.textContent = Lang.blue
        titleGame.classList.add('blueTurn')
        titleGame.classList.remove('redTurn')
        isRedTurn = false
    } else {
        titleGame.textContent = Lang.red
        titleGame.classList.remove('blueTurn')
        titleGame.classList.add('redTurn')
        isRedTurn = true
    }
    instruction.textContent = Lang.turn
}

function playwithFriend() {
    const element = event.composedPath()[0]
    if (element.classList.contains('disable')) {
        return 0;
    }
    moves -= 1
    if (isRedTurn) {
        element.classList.add('red')
        element.classList.add('disable')
        turnOf()
        winHandler(element, 'red')
    } else {
        element.classList.add('blue')
        element.classList.add('disable')
        turnOf()
        winHandler(element, 'blue')
    }
}

for (let i = 0; i < 9; i++) {
    celdas[i].addEventListener('click', playwithFriend)
}