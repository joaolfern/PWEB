const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
const textInput = document.querySelector('#textInput')

function uncheckAll({id}) {
	checkboxes.forEach(cbx => {
		if (cbx.id !== id)
			cbx.checked = false
	})
}

textInput.addEventListener('input', () => {
	uncheckAll({id: ''})
})

checkboxes.forEach(cbx => (
	cbx.addEventListener('change', (e) => {
		const { id, checked } = e.target
		if (checked)
			uncheckAll({id})

		switch (id) {
			case 'cbxLowerCase':
				textInput.value = textInput.value.toLowerCase()
				break
			case 'cbxUpperCase':
				textInput.value = textInput.value.toUpperCase()
				break
		}
	})
))