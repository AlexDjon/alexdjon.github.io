function getItem (info) {
  return document.querySelector(info)
}

function getAll(info) {
  return document.querySelectorAll(info)
}

getItem('.user').addEventListener('click', () => {
  getItem('.areas').classList.toggle('ativo')
})



/*
  * CLOSE NAVBAR
*/
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
    this.style.left = '0px'
    getItem('.navbar .menu').style.display = 'none'
    thisIcon(this, 'chevron_right', 'change')

    getItem('.meio').style.width = '100%'
  }
  else 
  {
    this.style.left = '205px'
    getItem('.navbar .menu').style.display = 'flex'
    thisIcon(this, 'chevron_left', 'change')

    getItem('.meio').style.width = 'calc(100% - var(--navX)'
  }
})

// document.documentElement.style.setProperty('--verdeW', 'red')
function closeAll() {
  const all = getAll('.viewer')

  all.forEach(e => {
    e.style.display = 'none'
  })
}

function changeLocal(newLocal) {
  closeAll()

  getItem(`.viewer#${newLocal}`).style.display = 'block'
}


function changeColor (loader) {
  const varCss = getItem('#local').value

  const styles = getComputedStyle(document.documentElement);

  if(loader == 'select') {
    getItem('#novaCor').value = String(styles.getPropertyValue(varCss)).trim()
  }
  const color = getItem('#novaCor').value

  document.documentElement.style.setProperty(varCss, color)
}
