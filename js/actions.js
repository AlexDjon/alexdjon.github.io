/** Projetos **/
const projetos = [
  { nome: 'OmniStack 11.0', link: 'https://github.com/AlexDjon/Semana-OmniStack-11.0/', img: 'semanaomnistack11.png' },
  { nome: 'YoPopo', link: 'https://yopopo.site/', img: 'yopopo.png' },
  { nome: 'ChocoFestas', link: 'https://welcometoalex.space/choco/', img: 'chocofestas.png' },
  { nome: 'Orion', link: 'https://welcometoalex.space/orion/', img: 'orion.png' },
]

function carregarProjetos() {
  const listaDeCartoes = document.querySelector('.lista_de_cartoes')
  
  projetos.forEach((projeto, index) => {
    const cartao = document.createElement('div')
      cartao.classList.add('cartao')

    const img = document.createElement('img')
      img.src = `img/projetos/${projeto.img}`
      if(projeto.nome === 'YoPopo') img.classList.add('circle-radius-t3')
    
    const title = document.createElement('h3')
      title.textContent = projeto.nome

    const link = document.createElement('a')
      link.href = projeto.link
      link.classList.add('circle-radius-t1')
      link.innerHTML = "<i class='material-icons'>navigate_next</i>"

    cartao.appendChild(img)
    cartao.appendChild(title)
    cartao.appendChild(link)
    listaDeCartoes.appendChild(cartao)
  })
}
carregarProjetos()

feather.replace()
