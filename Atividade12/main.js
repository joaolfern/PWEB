const form = document.querySelector('#commentForm')
const sim = document.querySelector('#sim')

form.addEventListener('submit', (e) => {
    const elements = Array.from(document.forms.commentForm.elements)
    
    elements.forEach(element => {
        switch (element.id) {
            case 'nome':
                if (element.value.length < 10) alert('Nome não podeter menos que 10 caracteres')
                break
            case 'email':
                if (!(element.value.split('').includes('@') && element.value.split('').includes('.') < 10)) alert('Email deve ter os caracteres @ e .')
                break
            case 'comentario':
                if (element.value.length < 20) alert('Comentário não podeter menos que 20 caracteres')
                break
        }
    })

    if(sim.checked)
        alert('Que bom que vocêvoltou a visitar esta página!')
    else
        alert('Volte sempre à estápágina')

    e.preventDefault()
})