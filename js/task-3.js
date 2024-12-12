const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', (e) => {
  const outputValue = e.currentTarget.value.trim()
  if (outputValue) {
    output.textContent = outputValue
  } else {
    output.textContent = 'Anonymous'
  }
})
