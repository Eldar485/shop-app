export const authModule = {
    state: () => ({
        isAuth: { auth: false, role: 'NOTAUTH'}
    }),

    getters: {
        getAuth: state => state.isAuth,
    },

    mutations: {
        setAuth(state, auth) {
            state.isAuth = auth;
            if (auth.auth) {
                localStorage.setItem('auth', `${auth.auth}`)
            } else {
                localStorage.removeItem('auth')
            }
        }
    },
    namespaced: true
}