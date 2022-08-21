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