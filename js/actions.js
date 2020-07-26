/** Projetos **/
// const projetos = [
//   { nome: 'Anota Tudo', link: 'https://github.com/AlexDjon/Anota-Tudo', img: 'anotatudo.png', radius: true },
//   { nome: 'YoPopo', link: 'https://yopopo.site/', img: 'yopopo.png',  radius: true},
//   { nome: 'ChocoFestas', link: 'https://welcometoalex.space/choco/', img: 'chocofestas.png' },
//   { nome: 'OmniStack 11.0', link: 'https://github.com/AlexDjon/Semana-OmniStack-11.0/', img: 'semanaomnistack11.png' },
// ]

function newElem(type, classes) {
  const elem = document.createElement(type)
  if(classes) {
    elem.classList.add(classes)
  }
  return elem
}

function moreAppends(feather, childrens = []) {
  for(children of childrens) {
    feather.appendChild(children)
  }

  return feather
}


function adicionarProjeto(projeto) {  
  const cartao = newElem('div', 'cartao')
  cartao.addEventListener('click', () => {
    window.open(projeto.link, '_blank')
  })

  const img = newElem('img', projeto.radius ? 'circle-radius-t3' : '')
  img.src = `img/projetos/${projeto.img}`
  
  const title = newElem('h3')
  title.textContent = projeto.nome

  const link = newElem('a', 'circle-radius-t1')
  link.href = projeto.link
  link.innerHTML = "<i class='material-icons'>navigate_next</i>"

  
  const full = moreAppends(cartao, [img, title, link])
  document.querySelector('.lista_de_cartoes').appendChild(full)
}

function exibir(data, type) {
  if(type == 'projetos') {
    for(projeto of data) {
      adicionarProjeto(projeto)
    }
  }
}


function getInfos() {  
  const req = new XMLHttpRequest()

  req.open('GET', 'js/infos.json')
  req.responseType = 'json'
  req.send()
  
  req.onload = function() {
    for(res in req.response) {
      exibir(req.response[res], res)
    }
  }
}
getInfos()



function checkMobile(x) {
  const mobile = window.matchMedia("(max-width: 800px)")

  if (mobile) {    
    const text = document.querySelector('.apresentacao h2')
    const alteredText = text.textContent.replace('/', '&')

    text.textContent = alteredText

    // Sobre Line
    const sobreH = document.querySelector('.sobre').clientHeight
    const sobreLine = document.querySelector('.sobre .line')
    sobreLine.style.marginTop = `${sobreH+25}px`
  }
}

checkMobile()