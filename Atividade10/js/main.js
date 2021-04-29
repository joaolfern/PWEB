const windowImg = document.querySelector('.window')


windowImg.addEventListener('mouseover', () => {
    windowImg.src = './img/aberta.jfif'
})

windowImg.addEventListener('mouseleave', () => {
    windowImg.src = './img/fechada.jfif'
})

windowImg.addEventListener('click', () => {
    windowImg.src = './img/quebrada.jfif'
})