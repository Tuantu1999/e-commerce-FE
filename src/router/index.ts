/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('@/pages/auth/login.vue'),
  },
  {
    path: '/',
    component: () => import('@/pages/main-container.vue'),
    children: [
      {
        path: '/',
        redirect: 'dashboard',
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/index.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt');

  if (to.meta.requiresAuth && !isAuthenticated) return next('/login');
  next();
});

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
