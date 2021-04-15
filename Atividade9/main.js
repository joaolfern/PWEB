const inputs = document.querySelectorAll('.number')
const button = document.querySelector('.calc')
const result = document.querySelector('.result')

const options = Array.from(document.querySelectorAll('.options'))
const viewButtons = Array.from(document.querySelectorAll('.btn-view'))
const views = Array.from(document.querySelectorAll('.view'))
const radios = Array.from(document.querySelectorAll('.radio'))
const contaButton = document.querySelector('.showConta')
const contaInputs = Array.from(document.querySelectorAll('.input'))
const resultConta = document.querySelector('.result-conta')

let selectedRadio = 'corrente'

let selectedView = ''

class Retangulo {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    calcular() {
        return this.x * this.y
    }
}

class Conta {
    constructor(nome, banco, numero, saldo) {
        this.nome = nome
        this.banco = banco
        this.numero = numero
        this.saldo = saldo
    }

    getNome() {
        return this.nome
    }

    getBanco() {
        return this.banco
    }

    getNumero() {
        return this.numero
    }

    getSaldo() {
        return this.saldo
    }
    setNome(nome) {
        this.nome = nome
    }

    setBanco(banco) {
        this.banco = banco
    }

    setNumero(numero) {
        this.numero = numero
    }

    setSaldo(saldo) {
        this.saldo = saldo
    }
}

class ContaCorrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
        super(nome, banco, numero, saldo)
        this.saldoEspecial = saldoEspecial
    }

    getSaldoEspecial() {
        return this.saldoEspecial
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial
    }
}
const contaCorrente = new ContaCorrente()


class ContaPoupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, dataVencimento) {
        super(nome, banco, numero, saldo)
        this.juros = juros
        this.dataVencimento = dataVencimento
    }

    getJuros() {
        return this.juros
    }

    setJuros(juros) {
        this.juros = juros
    }

    getDataVencimento() {
        return this.dataVencimento
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento
    }

}

const contaPoupanca = new ContaPoupanca()

viewButtons.forEach(viewButton => {
    viewButton.addEventListener('click', () => {
        
        selectedView = 'view-' + viewButton.classList[viewButton.classList.length - 1].split('-').slice(-1).join()
        views.forEach(view => {
            if (!view.classList.contains(selectedView)) {
                view.classList.add('off')
            } else {
                view.classList.remove('off')
            }
        })
    })
})

button.addEventListener('click', () => {
    const values = Array.from(inputs).map(input => Number(input.value))
    const retangle = new Retangulo(...values)
    result.innerHTML = retangle.calcular()
})

radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        selectedRadio = e.target.value
        options.forEach(option => {
            if (option.classList.contains(selectedRadio + '-options')) {
                option.classList.remove('off')
            }
            else {
                option.classList.add('off')
                option.innerHTML = ''
            }
        })
    })
})

contaButton.addEventListener('click', () => {
    const values = contaInputs.reduce((acc, input) => {
        if (input.type === 'number')
            return {...acc, [input.placeholder.replace(' ', '-')]: Number(input.value)}
        return {...acc, [input.placeholder.replace(' ', '-')]: input.value}
    }, {})

    if (selectedRadio === 'corrente'){
        contaCorrente.setBanco(values.banco)
        contaCorrente.setNome(values.nome)
        contaCorrente.setNumero(values.numero)
        contaCorrente.setSaldo(values.saldo)
        contaCorrente.setSaldoEspecial(values['saldo-especial'])

        const contaCorrenteValues = [
            contaCorrente.getNome(), contaCorrente.getBanco(), contaCorrente.getNumero(),
            contaCorrente.getSaldo(), contaCorrente.getSaldoEspecial()
        ]

        resultConta.innerHTML = '<h3>Conta</h3>' + contaCorrenteValues
            .filter(valueConta => valueConta)
            .map(valueConta => valueConta && `<p>${valueConta}</p>`)
            .join('')

    } else {
        contaPoupanca.setBanco(values.banco)
        contaPoupanca.setNome(values.nome)
        contaPoupanca.setNumero(values.numero)
        contaPoupanca.setJuros(values.juros)
        contaPoupanca.setDataVencimento(values['data-vencimento'])

        const contaPoupancaValues = [
            contaPoupanca.getNome(), contaPoupanca.getBanco(), contaPoupanca.getNumero(),
            contaPoupanca.getSaldo(), contaPoupanca.getJuros(), contaPoupanca.getDataVencimento()
        ]

        resultConta.innerHTML = '<h3>Conta</h3>' + contaPoupancaValues
            .filter(valueConta => valueConta)
            .map(valueConta => valueConta && `<p>${valueConta}</p>`)
            .join('')
    }
})
