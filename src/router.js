import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./pages/homePage/Home.vue'),
    },
    {
        path: '/login',
        component: () => import('./pages/loginPage/Login.vue'),
    },
    {
        path: '/new-project',
        component: () => import('./pages/newProjPage/NewProject.vue'),
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
