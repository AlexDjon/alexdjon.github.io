function getItem(info) {
  return document.querySelector(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})

getItem('.navbar .close').addEventListener('click', function() {
  const change = getItem('.navbar').classList.toggle('ativo')

  const changeOrGet = (context, value, action = 'get') => {
    if(action == 'get') 
      return context.firstElementChild.textContent
    else if(action == 'change')
      context.firstElementChild.textContent = value
  }

  if(change) {
    const icon = changeOrGet(this)

    if(icon === 'chevron_left') {
      changeOrGet(this, 'chevron_right', 'change')
    }
    else {
      changeOrGet(this, 'chevron_left', 'change')
    }
  }
})