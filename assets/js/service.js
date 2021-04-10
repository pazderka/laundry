/**
 * Opens side menu for small screens
 * @param { HTMLDivElement } menu 
 */
export const open_menu = menu => {
	menu.classList.add('openMenu')
	document.body.classList.add('overlay')
}

/**
 * Closes side menu for small screens
 * @param { HTMLDivElement } menu 
 */
export const close_menu = menu => {
	menu.classList.remove('openMenu')
	document.body.classList.remove('overlay')
}

/**
 * Checks small screen menu state
 * @param { Object } e - Received click event 
 * @param { HTMLDivElement } menu 
 */
export const check_menu = (e, menu) => {
	const el_classes = e.target.classList
	const should_close =
    !(el_classes.contains('nav__side') || el_classes.contains('menu__burger') || el_classes.contains('menu__stick'))

	should_close && close_menu(menu)
}