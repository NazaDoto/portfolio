import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';

const routes = [{
    path: '/',
    component: HomeComponent,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Verifica si la ruta requiere autenticación
        if (!token) {
            // Si no hay token y la ruta requiere autenticación, redirige a /login
            next('/');
        } else {
            // Si hay token, permite que el usuario continúe navegando
            next();
        }
    } else {
        // Si la ruta no requiere autenticación, permite que el usuario continúe navegando
        next();
    }
});

export default router;