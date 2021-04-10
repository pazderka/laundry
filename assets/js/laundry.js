import 'LaundryCSS/main.scss'

import { open_menu, close_menu, check_menu } from 'LaundryJS/service'
import { mdiCloseCircle } from '@mdi/js'

document.addEventListener('DOMContentLoaded', () => {
	// Elements
	const burger = document.querySelector('.menu__burger')
	const menu = document.querySelector('.nav__side')
	const menu_close = document.querySelector('.nav__close')

	// Check small screen menu state
	document.body.addEventListener('click', e => check_menu(e, menu))

	// Menu open
	burger.addEventListener('click', () => open_menu(menu))

	// Menu close
	menu_close.querySelector('path').setAttribute('d', mdiCloseCircle)
	menu_close.addEventListener('click', () => close_menu(menu))
})
