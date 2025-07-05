import { writable } from 'svelte/store';

export const featuredProducts = writable([
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: '/images/headphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 149.99, image: '/images/smartwatch.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: '/images/speaker.jpg' }
]);
