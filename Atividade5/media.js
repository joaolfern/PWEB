const inputs = document.querySelectorAll('.number')
const button = document.querySelector('.calcMedia')
const result = document.querySelector('.result')

button.addEventListener('click', () => {
    const values = Array.from(inputs).map(input => Number(input.value))
    result.innerHTML = values.reduce((item, acc) => {
        return item + acc
    }) / 3
})