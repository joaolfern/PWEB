const v1 = document.querySelector('.v1')
const v2 = document.querySelector('.v2')
const result = document.querySelector('.total')

const buttons = Array.from(document.querySelectorAll('#button'))


const operations = {
    '+': (v1, v2) => v1 + v2,
    '-': (v1, v2) => v1 - v2,
    '/': (v1, v2) => v1 / v2,
    '*': (v1, v2) => v1 * v2,
    '%': (v1, v2) => v1 % v2
};

buttons.map(button => button.addEventListener('click', (e) => {
    result.innerHTML = operations[e.target.innerHTML](Number(v1.value), Number(v2.value))
}))