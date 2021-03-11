const navbar = document.querySelector("#navbar")

let lastScroll = 0
let alreadyShown = true
let alreadyHidden = false

function hideNavbar() {
    navbar.style.top = `-230px`
    alreadyHidden = true
    alreadyShown = false
}

function showNavbar() {
    navbar.style.top = `0px`
    alreadyShown = true
    alreadyHidden = false
}

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset

    if (currentScroll > lastScroll && !alreadyHidden) {
        hideNavbar()
    }
    else if (currentScroll < lastScroll && !alreadyShown) {
        showNavbar()
    }

    lastScroll = currentScroll
})