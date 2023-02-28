export const notificationModule = {
    state: () => ({
        notifications: []
    }),
    getters: {
        getNotifications: state => state.notifications
    },
    mutations: {
        setNotifications(state, notification) {
            notification.id = Date.now().toLocaleString();
            state.notifications.unshift(notification);
            setTimeout(() => {
                state.notifications = state.notifications.filter(n => n.id !== notification.id)
            }, 3000);
        }
    },
    namespaced: true
}