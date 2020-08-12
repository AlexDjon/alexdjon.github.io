function getItem (info) {
  return document.querySelector(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})

getItem('.navbar .close').addEventListener('click', function () {
  
  getItem('.navbar').classList.toggle('ativo')

  const changeOrGet = (context, value, action = 'get') => {
    if (action == 'get')
      return context.firstElementChild
    else if (action == 'change')
      context.firstElementChild.textContent = value
  }

  const icon = changeOrGet(this).textContent

  if (icon === 'chevron_left') {
    changeOrGet(this).style.left = '0px'
    changeOrGet(this, 'chevron_right', 'change')
  }
  else {
    changeOrGet(this).style.left = '184.92px'
    changeOrGet(this, 'chevron_left', 'change')
  }
})