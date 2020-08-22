function getItem (info) {
  return document.querySelector(info)
}

function getAll (info) {
  return document.querySelectorAll(info)
}

function create (tag, classes) {
  const elem = document.createElement(tag)

  if (classes) {
    elem.classList.add(classes)
  }

  return elem
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

    getItem('.conteudo').style.width = '100%'
  }
  else {
    this.style.left = '205px'
    getItem('.navbar .menu').style.display = 'flex'
    thisIcon(this, 'chevron_left', 'change')

    getItem('.conteudo').style.width = 'calc(100% - var(--navX)'
  }
})

// document.documentElement.style.setProperty('--verdeW', 'red')
function closeAll () {
  const all = getAll('.viewer')

  all.forEach(e => {
    e.style.display = 'none'
  })
}

function changeLocal (newLocal) {
  closeAll()

  getItem(`.viewer#${newLocal}`).style.display = 'block'
}


const styles = getComputedStyle(document.documentElement);

function changeColor (loader) {
  const varCss = getItem('#local').value

  if (loader == 'select') {
    getItem('#novaCor').value = String(styles.getPropertyValue(varCss)).trim()
  }
  const color = getItem('#novaCor').value

  document.documentElement.style.setProperty(varCss, color)
}

getItem('#importColor').addEventListener('change', function (e) {
  changeColorNew(e)
})

function changeColorNew (e) {
  console.log(e)
  const varCss = e.target.value

  getItem('#novaCor').value = String(styles.getPropertyValue(varCss)).trim()

  changeColor()

}


function addOptions () {
  const list = [
    { var_css: '--cabecalho', label: 'Cabeçalho' },
    { var_css: '--btn-cabecalho-bg', label: 'Botões Cabeçalho - BG' },
    { var_css: '--btn-cabecalho-text', label: 'Botões Cabeçalho - TEXT' },
    { var_css: '--nav-bg', label: 'Navbar - BG' },
    { var_css: '--nav-menu', label: 'Navbar - Menu' },
    { var_css: '--nav-menu-open', label: 'Navbar - Icon' },
    { var_css: '--toolbar', label: 'Barra Dinâmica' },
    { var_css: '--btn-close', label: 'Botão Fechar' },
    { var_css: '--btn-edit', label: 'Botão Editar' },
    { var_css: '--btn-save', label: 'Botão Salvar' },

    { var_css: '--fundo', label: 'Fundo' },
    { var_css: '--black', label: 'Preto Forte' },
    { var_css: '--black2', label: 'Preto Fraco' },
    { var_css: '--white', label: 'Branco' },
    { var_css: '--white2', label: 'Branco Secundário' },
    { var_css: '--grey', label: 'Cinza' },
    { var_css: '--verdeW', label: 'Cor Principal' },
    { var_css: '--verdeW2', label: 'Cor Secundária' },
  ]

  const select = [getItem('#local'), getItem('#importColor')]

  select.forEach(sel => {
    list.forEach(css => {
      const option = create('option')

      option.value = css.var_css
      option.textContent = css.label

      sel.appendChild(option)
    })
  })
}

addOptions()