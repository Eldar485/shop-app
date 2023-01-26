import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import VAbout from "@/pages/v-About";
import VMain from "@/pages/v-Main";

const routes = [
    {
        path: '/',
        component: VMain
    },
    {
        path: '/about',
        component: VAbout
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router