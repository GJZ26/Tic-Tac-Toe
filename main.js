let isRedTurn = false

const celdas = [
    document.getElementById('pos1'),
    document.getElementById('pos2'),
    document.getElementById('pos3'),
    document.getElementById('pos4'),
    document.getElementById('pos5'),
    document.getElementById('pos6'),
    document.getElementById('pos7'),
    document.getElementById('pos8'),
    document.getElementById('pos9')
]

// Validadores para saber si hay tres en raya
function TH(color) {
    if (
        celdas[0].classList.contains(color) &&
        celdas[1].classList.contains(color) &&
        celdas[2].classList.contains(color)
    ) {
        celdas[0].classList.remove(color)
        celdas[0].classList.add('win')

        celdas[1].classList.remove(color)
        celdas[1].classList.add('win')

        celdas[2].classList.remove(color)
        celdas[2].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function TV(color) {
    if (
        celdas[0].classList.contains(color) &&
        celdas[3].classList.contains(color) &&
        celdas[6].classList.contains(color)
    ) {
        celdas[0].classList.remove(color)
        celdas[0].classList.add('win')

        celdas[3].classList.remove(color)
        celdas[3].classList.add('win')

        celdas[6].classList.remove(color)
        celdas[6].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function TD(color) {
    if (
        celdas[0].classList.contains(color) &&
        celdas[4].classList.contains(color) &&
        celdas[8].classList.contains(color)
    ) {
        celdas[0].classList.remove(color)
        celdas[0].classList.add('win')

        celdas[4].classList.remove(color)
        celdas[4].classList.add('win')

        celdas[8].classList.remove(color)
        celdas[8].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function TMV(color) {
    if (
        celdas[1].classList.contains(color) &&
        celdas[4].classList.contains(color) &&
        celdas[7].classList.contains(color)
    ) {
        celdas[1].classList.remove(color)
        celdas[1].classList.add('win')

        celdas[4].classList.remove(color)
        celdas[4].classList.add('win')

        celdas[7].classList.remove(color)
        celdas[7].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function TFH(color) {
    if (
        celdas[2].classList.contains(color) &&
        celdas[5].classList.contains(color) &&
        celdas[8].classList.contains(color)
    ) {
        celdas[2].classList.remove(color)
        celdas[2].classList.add('win')

        celdas[5].classList.remove(color)
        celdas[5].classList.add('win')

        celdas[8].classList.remove(color)
        celdas[8].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function TFD(color) {
    if (
        celdas[2].classList.contains(color) &&
        celdas[4].classList.contains(color) &&
        celdas[6].classList.contains(color)
    ) {
        celdas[2].classList.remove(color)
        celdas[2].classList.add('win')

        celdas[4].classList.remove(color)
        celdas[4].classList.add('win')

        celdas[6].classList.remove(color)
        celdas[6].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function MH(color) {
    if (
        celdas[3].classList.contains(color) &&
        celdas[4].classList.contains(color) &&
        celdas[5].classList.contains(color)
    ) {
        celdas[3].classList.remove(color)
        celdas[3].classList.add('win')

        celdas[4].classList.remove(color)
        celdas[4].classList.add('win')

        celdas[5].classList.remove(color)
        celdas[5].classList.add('win')
        return true;
    } else {
        return false;
    }
}
function FH(color) {
    if (
        celdas[6].classList.contains(color) &&
        celdas[7].classList.contains(color) &&
        celdas[8].classList.contains(color)
    ) {
        celdas[6].classList.remove(color)
        celdas[6].classList.add('win')

        celdas[7].classList.remove(color)
        celdas[7].classList.add('win')

        celdas[8].classList.remove(color)
        celdas[8].classList.add('win')
        return true;
    } else {
        return false;
    }
}

function winHandler(element, color) {
    const position = parseInt(element.id.charAt(3))

    switch (position) {
        case 1:
            TH(color);
            TV(color);
            TD(color);
            break;
        case 2:
            TH(color);
            TMV(color);
            break;
        case 3:
            TH(color);
            TFH(color);
            TFD(color);
            break;
        case 4:
            TV(color);
            MH(color);
            break;
        case 5:
            TD(color);
            TMV(color);
            TFD(color);
            MH(color);
            break;
        case 6:
            TFH(color);
            MH(color);
            break;
        case 7:
            TV(color);
            TFD(color);
            FH(color);
            break;
        case 8:
            TMV(color);
            FH(color);
            break;
        case 9:
            TD(color);
            TFH(color);
            FH(color);
            break;
        default:
            new Error("Celdas fuera del rango")
            break;
    }
}

function turnOf() {
    if (isRedTurn) {
        isRedTurn = false
    } else {
        isRedTurn = true
    }
}

function markCell() {
    const element = event.composedPath()[0]
    if (element.classList.contains('disable')) {
        return 0;
    }
    if (isRedTurn) {
        element.classList.add('red')
        element.classList.add('disable')
        winHandler(element, 'red')
    } else {
        element.classList.add('blue')
        element.classList.add('disable')
        winHandler(element, 'blue')
    }
}

for (let i = 0; i < 9; i++) {
    celdas[i].addEventListener('click', markCell)
}