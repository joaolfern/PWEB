const openHMenu = document.querySelector('.navbar__h-menu')
const hMenu = document.querySelector('.h-menu')
const closeHMenu = document.querySelector('.h-menu__close')
const hMenuItems = document.querySelectorAll('.navbar__link--h-menu')

function toggleHMenu() {
    hMenu.classList.toggle('h-menu--hidden')
}

openHMenu.addEventListener('click', () => {
    toggleHMenu()
})

closeHMenu.addEventListener('click', () => {
    toggleHMenu()
})

hMenuItems.forEach(item => item.addEventListener('click', () => {
    toggleHMenu()
}))