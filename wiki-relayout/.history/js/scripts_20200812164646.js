function getItem(info) {
  return document.querySelector(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})

getItem('.navbar .close').addEventListener('click', () => {
  const change = getItem('.navbar').classList.toggle('ativo')

  if(change) {
    console.log(this)
  }
})