const button = document.querySelector('.aside__button')
const menu = document.querySelector('.nav')
const linkColection = document.querySelectorAll('.link')

function toggleBar() {
    if (menu.classList.contains('off')) {
        menu.classList.add('on')
        menu.classList.remove('off')
    } else {
        menu.classList.add('off')
        menu.classList.remove('on')
    }
}

linkColection.forEach(link => {
    link.addEventListener('click', () => {
        toggleBar()
    })
})

button.addEventListener('click', () => {
    toggleBar()
})