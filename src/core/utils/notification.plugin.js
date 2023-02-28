import store from '../store/index';

export default {
    install(app) {
        app.config.globalProperties.$notification = (notification) => {
            store.commit('notification/setNotifications', notification)
        }
    }
}