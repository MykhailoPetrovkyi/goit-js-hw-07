const controls = document.querySelector('#controls')
const input = document.querySelector('input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const container = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

function createBoxes(amount) {
  deleteBoxes()
  let size = 30
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement('div')
    boxes.style.width = `${size}px`
    boxes.style.height = `${size}px`
    boxes.style.backgroundColor = getRandomHexColor()
    boxes.style.margin = '10px'
    container.append(boxes)
    size += 10
  }
}

createButton.addEventListener('click', (e) => {
  const amount = input.value
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount)
    input.value = ''
  } else {
    alert('Еnter a number between 1 and 100')
  }
})

destroyButton.addEventListener('click', (e) => {
  deleteBoxes()
})

const deleteBoxes = () => (container.innerHTML = '')
