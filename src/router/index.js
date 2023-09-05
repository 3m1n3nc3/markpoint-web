import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home.page',
          meta: { title: 'Homepage', image: 'image-1' },
          component: () => import('../pages/HomePage.vue')
        },
        {
          path: '/projects',
          name: 'projects.page',
          meta: { title: 'Past Projects', image: 'image-2' },
          component: () => import('../pages/ProjectsPage.vue')
        },
        {
          path: '/services/:service?',
          name: 'services.page',
          meta: { title: 'Services', image: 'image-3' },
          component: () => import('../pages/ServicesPage.vue')
        },
        {
          path: '/services/request',
          name: 'services.request.page',
          meta: { title: 'Request for service', image: 'image-4', tree: ['services.page'] },
          component: () => import('../pages/ServiceRequestPage.vue')
        },
        {
          path: '/contact-us',
          name: 'contact.page',
          meta: { title: 'Contact Us', image: 'image-5' },
          component: () => import('../pages/ContactPage.vue')
        },
      ]
    }
  ]
})

export default router
