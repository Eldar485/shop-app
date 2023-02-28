import {createRouter, createWebHistory} from "vue-router"
import VAbout from "@/pages/v-About";
import VMain from "@/pages/main/v-Main";
import VContacts from "@/pages/contacts/v-Contacts";
import VShop from "@/pages/v-Shop";
import VOrderPlaced from "@/pages/v-Order-placed";
import VMakeOrder from "@/pages/make-order/v-Make-order";
import VCart from "@/pages/cart/v-Cart";
import ProductItem from "@/pages/product-item/v-Product-item-page";
import VAuthorization from "@/pages/v-Authorization";
import VRegistration from "@/pages/v-Registration";
import VAdmin from "@/pages/admin/v-Admin";
import jwtDecode from "jwt-decode";


const routes = [
    {
        path: '/',
        component: VMain,
        meta: {
            breadcrumb: 'Главная'
        },
    },
    {
        path: '/about',
        component: VAbout,
        meta: {
            breadcrumb: 'О бренде'
        }
    },
    {
        path: '/contacts',
        component: VContacts,
        meta: {
            breadcrumb: 'Контакты'
        }
    },
    {
        path: '/shop',
        component: VShop,
        meta: {
            breadcrumb: 'Магазин'
        }
    },
    {
        path: '/shop/:id',
        component: ProductItem,
    },
    {
        path: '/make-order/order-placed',
        component: VOrderPlaced,
        meta: {
            auth: true,
            breadcrumb: 'Заказ получен'
        }
    },
    {
        path: '/make-order',
        component: VMakeOrder,
        meta: {
            auth: true,
            breadcrumb: 'Оформление заказа'
        }
    },
    {
        path: '/cart',
        component: VCart,
        meta: {
            breadcrumb: 'Корзина'
        }
    },
    {
        path: '/authorization',
        component: VAuthorization,
    },
    {
        path: '/registration',
        component: VRegistration,
    },
    {
        path: '/admin',
        meta: {
            auth: true,
            admin: true
        },
        component: VAdmin,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        window.scrollTo(0,0);
    }
})
router.beforeEach((to, from, next) => {
    let isAuth = localStorage.getItem('auth')
    let token = null
    if (localStorage.getItem('token') !== null) {
        token = jwtDecode(localStorage.getItem('token'))
    }
    const requireAuth = to.matched.some(record => record.meta.auth)
    const requireAdmin = to.matched.some(record => record.meta.admin)

    if (requireAuth && !isAuth) {
        next({
            path: '/authorization',
            query: {
                nextUrl: to.fullPath,
            }
        })
    } else {
        if (requireAdmin && token?.role !== 'ADMIN') {
            next({
                path: '/authorization',
            })
        } else {
            next()
        }
    }
})

export default router