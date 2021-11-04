const routes = [
    {
        path: '/',
        component: () => import('../pages/Home.vue'),
        name: 'home',
        meta: {
            title: "Home",
            icon: "mdi-home",
            requiresAuth: false
        }
    }
]

export default routes;
