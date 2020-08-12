function getItem (info) {
  return document.querySelector(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})

getItem('.navbar .close').addEventListener('click', function () {
  
  getItem('.navbar').classList.toggle('ativo')

  const thisIcon = (context, value, action = 'get') => {
    if (action == 'get') {
      return context.firstElementChild      
    }
    else if (action == 'change') {
      context.firstElementChild.textContent = value
    }
  }

  const icon = thisIcon(this).textContent

  if (icon === 'chevron_left') {
    thisIcon(this).style.left = '0px'
    thisIcon(this, 'chevron_right', 'change')
  }
  else {
    thisIcon(this).style.left = '184.92px'
    thisIcon(this, 'chevron_left', 'change')
  }
})