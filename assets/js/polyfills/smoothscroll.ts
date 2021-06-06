/**
 * Supports scollIntoView({ behavior: 'smooth' })
 * in browsers that dont support this natively
 * safari, edge, ...
 */
import { polyfill } from 'smoothscroll-polyfill';
polyfill();