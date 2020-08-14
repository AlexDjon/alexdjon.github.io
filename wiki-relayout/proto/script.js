/* Card de pesquisa */
const searchBtn = document.getElementById('searchBtn');
const searchWindow = document.getElementById('search')

searchBtn.addEventListener('click', () => toggleSearch())

document.addEventListener("keyup", (s) => {
	if (s.ctrlKey && s.shiftKey && s.key === "F" || (searchWindow.classList.contains('search--z-index') && s.key === "Escape")) {
		toggleSearch()
	}
})

function toggleSearch() {
	searchWindow.classList.toggle('search--z-index');

	let input = document.getElementById('search-input');
	setTimeout(() => {
		input.focus()
	}, 450);
}

/* Card para novo registro */
const registerBtn = document.getElementById('register')
const registerDiv = document.getElementById('form')
registerBtn.addEventListener('click', () => {
	if (aside.classList.contains('aside--off') && registerDiv.classList.contains('form--on')) {
		asideToggle()
	}

	if (!aside.classList.contains('aside--off') && !registerDiv.classList.contains('form--on')) {
		asideToggle()
	}
	toggleRegister();
});

function toggleRegister() {
	registerDiv.classList.toggle('form--on');
}



/* Aba lateral */
const sidePanelHandle = document.getElementById('side-panel__handle')
const sidePanel = document.getElementById('side-panel')
sidePanelHandle.addEventListener('click', () => side());

function side() {
	sidePanel.classList.toggle('side-panel__toggler');
}


/* Aside */
const aside = document.getElementById('aside')
const expandMainBtn = document.getElementById('main-expand')
const asideIndicator = document.getElementById('icon-panel__left')

expandMainBtn.addEventListener('click', () => asideToggle());

function asideToggle() {
	aside.classList.toggle('aside--off')
	asideIndicator.classList.toggle('icon-panel__hide')
}

const headerCenter = document.getElementById('header__center')
const operacional = document.getElementById('operacional')

operacional.addEventListener('click', () => headerCenterToggle());

function headerCenterToggle() {

	if (appsWrapper.classList.contains('card-apps--on')) {
		appsWrapper.classList.toggle('card-apps--on')
	}

	headerCenter.classList.toggle('header__center--on')
	operacional.classList.toggle('item--active')
}


const appBtn = document.getElementById('apps-btn')
const appsWrapper = document.getElementById('apps')

appBtn.addEventListener('click', () => appsToggle());

function appsToggle() {

	if (headerCenter.classList.contains('header__center--on')) {
		headerCenter.classList.toggle('header__center--on')
		operacional.classList.toggle('item--active')
	}

	appsWrapper.classList.toggle('card-apps--on')
}

// function menuExpand(idMenuSection) {
// 	let li = idMenuSection.getElementsByTagName("li");
// 	for (i = 0; i < li.length; i++) {
// 		let liType = li[i];
// 		if (liType.style.display == "none") {
// 			liType.style.display = "flex";
// 		} else {
// 			liType.style.display = "none";
// 		}
// 	}
// }

// function openCloseModal(idModal) {
// 	if (idModal.style.display == "none") {
// 		idModal.style.display = "flex";
// 		setTimeout(fade, 1);

// 		function fade() {
// 			idModal.classList.toggle("modal-wrapper-transition");
// 		}
// 	} else {
// 		closeModal(idModal);
// 	}
// }

// function closeModal(idModal) {
// 	idModal.classList.toggle("modal-wrapper-transition");
// 	setTimeout(fadeOut, modalTransition);

// 	function fadeOut() {
// 		idModal.style.display = "none";
// 	}
// }

// function closeOutsideModal(idModal) {
// 	if (event.target == idModal) {
// 		closeModal(idModal);
// 	}
// }

// function filterList() {
// 	let input = document.getElementById("myInput");
// 	let filter = input.value.toUpperCase();
// 	let ul = document.getElementById("itensList");
// 	let li = ul.getElementsByTagName("li");
// 	for (i = 0; i < li.length; i++) {
// 		let div = li[i].getElementsByTagName("span")[0];
// 		let txtValue = div.textContent || div.innerText;
// 		let spin = document.getElementsByClassName("menu-row");
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			li[i].style.display = "flex";
// 			for (j = 0; j < spin.length; j++) {
// 				spin[j].classList.add("spin");
// 			}
// 		} else {
// 			li[i].style.display = "none";
// 		}
// 	}
// }

// function tabela() {
// 	let tr = document.getElementsByTagName("tr");
// 	for (i = 0; i < tr.length; i++) {
// 		tr[i].classList.toggle("small-td");
// 	}
// }

// function sortTable(n) {
// 	var table,
// 		rows,
// 		switching,
// 		i,
// 		x,
// 		y,
// 		shouldSwitch,
// 		dir,
// 		switchcount = 0;
// 	table = document.getElementById("td-acesso-rapido");
// 	switching = true;
// 	dir = "asc";
// 	while (switching) {
// 		switching = false;
// 		rows = table.rows;
// 		for (i = 1; i < rows.length - 1; i++) {
// 			shouldSwitch = false;
// 			x = rows[i].getElementsByTagName("TD")[n];
// 			y = rows[i + 1].getElementsByTagName("TD")[n];
// 			if (dir == "asc") {
// 				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
// 					shouldSwitch = true;
// 					break;
// 				}
// 			} else if (dir == "desc") {
// 				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
// 					shouldSwitch = true;
// 					break;
// 				}
// 			}
// 		}
// 		if (shouldSwitch) {
// 			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
// 			switching = true;
// 			switchcount++;
// 		} else {
// 			if (switchcount == 0 && dir == "asc") {
// 				dir = "desc";
// 				switching = true;
// 			}
// 		}
// 	}
// }