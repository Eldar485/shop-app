<template>
    <div v-if="!loading" class="app">
        <v-notification></v-notification>
        <div class="wrapper">
            <div class="header">
                <v-header></v-header>
            </div>
            <div class="options">
                <div class="admin-panel" v-if="!getAuth.auth" @click="$router.push('/authorization')">Войти</div>
                <div class="admin-panel" v-if="getAuth.auth" @click="exit()">Выйти</div>
<!--                <div class="admin-panel" @click="switchLang()">{{ locale }}</div>-->
                <div class="admin-panel" v-if="getAuth.auth && getAuth.role === 'ADMIN'" @click="$router.push('/admin')">Админ</div>
            </div>
            <div class="content">
                <div v-if="loading">Загрузка</div>
                <router-view v-if="!loading"></router-view>
            </div>
            <div class="footer">
                <v-footer></v-footer>
            </div>
        </div>
    </div>
</template>

<script>

import VHeader from "@/core/components/header/v-Header";
import VFooter from "@/core/components/v-Footer";
import VNotification from "@/core/components/UI/notifications/v-notification";
import {mapActions, mapGetters, mapMutations} from "vuex";
import {check} from "@/core/http/userAPI";
import {useI18n} from "vue-i18n";

export default {
    components: {VFooter, VHeader, VNotification},
    setup() {
        const { t, locale } = useI18n({useScope: 'global'})
        return { t, locale }
    },

    data () {
        return {
            loading: false
        }
    },
    async mounted() {
        this.loading = true;
        try {
            await check().then((res) => {
                this.setAuth({auth: true, role  : res.role});
            });
        } catch (e) {
            return e
        } finally {
            this.loading = false
            this.setPage(1)
            await this.fetchFilters()
            await this.fetchProducts()
        }
    },
    computed: {
        ...mapGetters({
            getAuth: 'auth/getAuth',
        })
    },
    methods: {
        exit() {
            this.setAuth({auth: false, role: 'NOTAUTH'});
            localStorage.removeItem('token');
            this.$router.push('/')
        },
        // switchLang() {
        //     this.locale === 'en' ? this.locale = 'ru' : this.locale = 'en'
        //     localStorage.setItem('lang', this.locale)
        // },
        ...mapMutations({
            setAuth: 'auth/setAuth',
            setPage: 'shop/setPage'
        }),
        ...mapActions({
            fetchProducts: 'shop/fetchProducts',
            fetchFilters: 'shop/fetchFilters'
        }),
    }
}
</script>

<style lang="scss">
@import "./styles/styles";
@import "./styles/reset-styles.css";
</style>
