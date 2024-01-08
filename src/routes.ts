// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => Home,
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue'), 
//   },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
