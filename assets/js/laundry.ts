import 'LaundryCSS/main.scss';
import 'LaundryJS/polyfills/smoothscroll';

import { open_menu, close_menu, check_menu, scroll_to_partial } from './service';
import { mdiCloseCircle } from '@mdi/js';

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const burger = document.querySelector('.menu__burger') as HTMLDivElement;
  const menu = document.querySelector('.nav__side') as HTMLDivElement;
  const menu_close = document.querySelector('.nav__close') as SVGElement;
  const partials = document.querySelectorAll('[data-target]') as NodeListOf<Element>;

  // Check small screen menu state
  document.body.addEventListener('click', e => check_menu(e, menu));

  // Menu open
  burger.addEventListener('click', () => open_menu(menu));

  // Menu close
  menu_close.querySelector('path').setAttribute('d', mdiCloseCircle);
  menu_close.addEventListener('click', () => close_menu(menu));

  // Scroll on link click
  partials.forEach(partial_el => partial_el.addEventListener('click', (e: MouseEvent) => scroll_to_partial(e, partial_el)));
});
