let moves = 9;
const titleGame = document.getElementById('gameTitle')
const instruction = document.getElementById('instruction')

function reset() {
    moves = 9;
    isRedTurn = false;
    window.location.reload();
    return;
}

function gameOver(areYouWinnerSon, color) {
    let colorTrans;
    if(color==='blue'){
        colorTrans = Lang.blue
    }else{
        colorTrans = Lang.red
    }
    document.getElementById('ModalMessage').textContent = Lang.instBefore;
    if (areYouWinnerSon) {
        document.getElementById('ModalContainer').classList.remove('hidden')
        document.getElementById('ModalHead').classList.add(`${color}Turn`)
        document.getElementById('ModalHead').textContent = `${colorTrans} ${Lang.winner}`
        document.getElementById('ModalContainer').addEventListener('click', reset)
        return 0;
    }
    if (!areYouWinnerSon && moves === 0) {
        document.getElementById('ModalContainer').classList.remove('hidden')
        document.getElementById('ModalHead').textContent = Lang.tie
        document.getElementById('ModalContainer').addEventListener('click', reset)
        return 0;
    }
}

function winHandler(element, color) {
    const position = parseInt(element.id)

    switch (position) {
        case 1:
            gameOver(TH(color) || TV(color) || TD(color), color);
            break;
        case 2:
            gameOver(TH(color) || TMV(color), color);
            break;
        case 3:
            gameOver(TH(color) || TFH(color) || TFD(color), color);
            break;
        case 4:
            gameOver(TV(color) || MH(color), color);
            break;
        case 5:
            gameOver(TD(color) || TMV(color) || TFD(color) || MH(color), color);
            break;
        case 6:
            gameOver(TFH(color) || MH(color), color);
            break;
        case 7:
            gameOver(TV(color) || TFD(color) || FH(color), color);
            break;
        case 8:
            gameOver(TMV(color) || FH(color), color);
            break;
        case 9:
            gameOver(TD(color) || TFH(color) || FH(color), color);
            break;
        default:
            new Error("Celda fuera del rango")
            break;
    }
}