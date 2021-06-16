import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
  },
  {
    path: '/products',
    component: () => import('@/views/Products.vue'),
  },
  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/DashboardProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('@/views/DashboardOrders.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
