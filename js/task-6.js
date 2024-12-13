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

const deleteBoxes = () => (container.innerHTML = '')

function createBoxes(amount) {
  deleteBoxes()
  const boxes = []
  let size = 30
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor()
    box.style.margin = '10px'
    boxes.push(box)
    size += 10
  }
  container.append(...boxes)
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

destroyButton.addEventListener('click', deleteBoxes)
