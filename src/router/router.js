import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../pages/Login.vue'
import HomePage from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'HomePage'
    },
    {
        path: '/login',
        name: 'LogIn',
        component: Login,

    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active'

})
router.beforeEach(
    
    (to, from, next) => {
        const authentication = JSON.parse(sessionStorage.getItem("authentication"));
        if (to.name !== 'LogIn' && !authentication) {
            next({ name: 'LogIn' })
        }
        if (to.name === 'LogIn' && authentication) {
            next({ name: 'HomePage' })
        } else next();
    })

export default router;