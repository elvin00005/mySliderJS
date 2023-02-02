const img = document.querySelectorAll('.slider img');
let counter = 0

function slider() {
    for (let i = 0; i < img.length; i++) {
        img[i].classList.add('opacity')
    } img[counter].classList.remove('opacity')
}
slider()
document.querySelector('.slider__next').onclick = function () {
    if (counter - 1 == -1) {
        counter = img.length - 1
    } else {
        counter--
    }
    slider()
}
document.querySelector('.slider__back').onclick = function () {
    if (counter + 1 == img.length) {
        counter = 0
    } else {
        counter++
    }
    slider()
}
