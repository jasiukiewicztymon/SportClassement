import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Authentification from '../views/Authentification.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Dashboard from '../views/Dashboard.vue'
import page404 from '../views/page404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/authentification/type/:type', name: 'Authentification' , component: Authentification},
        { path: '/:pathMatch(.*)*', name: '404', component: page404 },
    ]
})

export default router;