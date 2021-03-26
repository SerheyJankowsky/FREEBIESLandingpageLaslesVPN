const prev = document.querySelector('.buutton_prev')
const next = document.querySelector('.button_next')
const circle = document.querySelector('.navigation_point__active')
circle.style.left = 0
const conteinerScroll = document.querySelector('.main_conteiner__coments__context')
console.log(circle.offsetLeft)
const width = conteinerScroll.scrollWidth
const activeCircle = document.querySelector('.navigation_point__active').offsetLeft

let zeroPoint = 0

function scroll(event) {
    let scroll = 300

    if (event.target.classList.contains('buutton_prev')) {
        if (zeroPoint > 0) {
            zeroPoint = zeroPoint - scroll
        }
        var positionback = (activeCircle - 438) - 20
        document.querySelector('.navigation_point__active').style.left = positionback + 'px'
    } else if (event.target.classList.contains('button_next')) {
        if (zeroPoint < width) {
            zeroPoint = zeroPoint + scroll
        }
        var position = (activeCircle - 438) + 20
        document.querySelector('.navigation_point__active').style.left = position + 'px'

    }
    conteinerScroll.scroll(zeroPoint, 0)
}
prev.addEventListener('click', scroll)
next.addEventListener('click', scroll)


//Горизонтальный скролл колесиком миши
const horizontal = document.querySelector(".main_conteiner__coments__context")

function horizontalSccroll(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        var modifier = 1;
        // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
        // замена вертикальной прокрутки горизонтальной
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
    }
}
if (horizontal) {
    horizontal.addEventListener('wheel', horizontalSccroll)
}