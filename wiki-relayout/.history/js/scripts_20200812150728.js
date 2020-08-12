function getItem(info) {
  return document.querySelector(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})