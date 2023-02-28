import {fetchFilters, fetchNewCollection, fetchProducts} from "@/core/http/shopAPI";
import {globals} from "@/main";


export const shopModule = {
    state: () => ({
        products: [],
        cart: [],
        currentProduct: [],
        currentPage: localStorage.getItem('currentPage') || 1,
        totalProductCount: 1,
        limit: 3,
        filters: [{id: '0', name: 'Все'}],
        currentFilter: localStorage.getItem('currentFilter') || 0,
        newCollection: []
    }),
    getters: {
        pageCount: state => Math.ceil(state.totalProductCount / state.limit),
        getTotalProductCount: state => state.totalProductCount,
        getProducts: state => state.products,
        getCartProductLength: state => state.cart.length,
        getCartProducts: state => state.cart,
        getFilters: state => state.filters,
        getFullPrice(state) {
            let fullPrice = 0;
            state.cart.forEach(product => {
                fullPrice += product.count * product.price;
            })
            return fullPrice;
        },
        getLimit: state => state.limit,
        getCurrentPage: state => state.currentPage,
        getCurrentFilter: state => state.currentFilter,
        getNewCollection: state => state.newCollection
    },
    mutations: {
        setPage(state, page) {
            localStorage.setItem('currentPage', page)
            state.currentPage = page;
        },
        addToCart(state, product) {
            if (state.cart.find(item => item.id === product.id)) {
                let a = state.cart.find(item => item.id === product.id);
                a.count = +a.count + +product.count;
            } else {
                state.cart.push(product);
            }
        },
        changeCartProductCount(state, prod) {
            state.cart.find(product => product.id === prod.id).count = prod.count;
        },
        clearCart(state) {
            state.cart = [];
        },
        setProducts(state, products) {
            state.products = products
        },
        totalProductCount(state, totalProductCount) {
            state.totalProductCount = totalProductCount
        },
        setFilters(state, filters) {
            // commit('clearFilters')
            // commit('setFilters', response.data)
            state.filters = [...state.filters, ...filters]
        },
        setCurrentFilter(state, filter) {
            localStorage.setItem('currentFilter', filter)
            state.currentFilter = filter
        },
        clearFilters(state) {
            state.filters = []
        },
        setNewCollection(state, newCollection) {
            state.newCollection = newCollection
        },
    },
    actions: {
        async fetchProducts({state, commit}) {
            try {
                const response = await fetchProducts({page: state.currentPage, limit: state.limit, typeId: state.currentFilter})
                commit('setProducts', response.data.rows)
                commit('totalProductCount', response.data.count)
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка при подгрузки товаров',
                    type: 'error'
                })
            }
        },
        async fetchNewCollection({commit}) {
            try {
                const response = await fetchNewCollection()
                commit('setNewCollection', response.data)
            } catch (e) {
                globals.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка при подгрузке товаров',
                    type: 'error'
                })
            }
        },
        async fetchFilters({commit}) {
            try {
                const response = await fetchFilters()
                commit('setFilters', response.data)
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка при подгрузке фильтров',
                    type: 'warning'
                })
            }
        }
    },
    namespaced: true
}