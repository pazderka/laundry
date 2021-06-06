/**
 * Opens side menu for small screens
 * @param { HTMLDivElement } menu 
 */
export const open_menu = (menu: HTMLDivElement) => {
  menu.classList.add('openMenu');
  document.body.classList.add('overlay');
};

/**
 * Closes side menu for small screens
 * @param { HTMLDivElement } menu 
 */
export const close_menu = (menu: HTMLDivElement) => {
  menu.classList.remove('openMenu');
  document.body.classList.remove('overlay');
};

/**
 * Checks small screen menu state
 * @param { Object } e - Received click event 
 * @param { HTMLDivElement } menu 
 */
export const check_menu = (e: MouseEvent, menu: HTMLDivElement) => {
  const el_classes = (e.target as HTMLAnchorElement).classList;
  const should_close =
    !(el_classes.contains('nav__side') || el_classes.contains('menu__burger') || el_classes.contains('menu__stick'));

  if (should_close) close_menu(menu);
};

/**
 * Smoothly scrolls to selected partial
 * @param { Object } e - Received click event 
 */
export const scroll_to_partial = (e: MouseEvent, partial_el: any) => {
  e.preventDefault();
  document.querySelector(`.${(partial_el).dataset.target}`).scrollIntoView(
    { behavior: 'smooth' }
  );
};