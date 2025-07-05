import { writable } from 'svelte/store';

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} image
 */

/**
 * @typedef {Product & { quantity?: number }} CartItem
 */

/** @type {import('svelte/store').Writable<Product[]>} */
export const featuredProducts = writable([
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: '/images/headphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 149.99, image: '/images/smartwatch.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: '/images/speaker.jpg' }
]);
/** @type {import('svelte/store').Writable<CartItem[]>} */
export const cart = writable([]);
