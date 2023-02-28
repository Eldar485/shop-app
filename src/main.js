import { createApp } from 'vue'
import App from './App.vue'
import components from './core/components/UI'
import router from "@/core/router/router";
import breadcrumbs from "vue-3-breadcrumbs";
import directives from "@/core/directives";
import store from "@/core/store";
import {createI18n, useI18n} from "vue-i18n";
import {languages, defaultLocale} from "@/i18n";
import notification from '@/core/utils/notification.plugin'

const app = createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
})

components.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || defaultLocale,
    fallbackLocale: 'en',
    messages
})
const globals = app.config.globalProperties
export { globals }
app
    .use(router)
    .use(store)
    .use(i18n)
    .use(notification)
    .use(breadcrumbs, {
        includeComponent: false
    })
    .mount('#app')
