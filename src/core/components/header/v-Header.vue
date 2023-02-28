<template>
    <div class="header">
        <div class="header__item logo">
            <div class="logo__image"></div>
            <div class="logo__text">WOMAZING</div>
        </div>
        <div class="menu" @click="toggleMenu" v-click-outside="() => {this.showBurger = false}">
            <div class="menu__list" v-if="showBurger">
                <div v-for="item in items"
                     :class="{ 'active': item.link === $router.currentRoute.value.path }"
                     :key="item.link" class="menu__item"
                     @click="$router.push(item.link)">{{ item.title }}</div>
            </div>
        </div>
        <div class="header__item nav">
            <div v-for="item in items"
                 :class="{'active': item.link === $router.currentRoute.value.path}"
                 :key="item.id" class="nav__item"
                 @click="$router.push(item.link)">{{ item.title }}</div>
        </div>
        <div class="header__item phone">
            <div class="phone__image"></div>
            <div class="phone__text" @click="show = true">+7 (495) 823-54-12</div>
        </div>
        <div class="header__item cart" @click="$router.push('/cart')">
            <div class="header__item cart-img"></div>
            <div class="header__item cart-count" v-if="getCartProductLength > 0">{{ getCartProductLength }}</div>
        </div>
    </div>
    <v-modal style-type="dialog" v-model:show="show">
        <v-call-back v-model:show="show"></v-call-back>
    </v-modal>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import VModal from "@/core/components/UI/v-Modal";
import {useVuelidate} from "@vuelidate/core";
import VCallBack from "@/core/components/header/v-Call-back";

export default {
    components: {VCallBack, VModal},
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            showBurger: false,
            show: false,
            currentItem: '/',
            items: [
                { title: 'Главная', link: '/'},
                { title: 'Магазин', link: '/shop'},
                { title: 'О бренде', link: '/about'},
                { title: 'Контакты', link: '/contacts'}
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.showBurger = !this.showBurger;
        },
        ...mapMutations({
            setAuth: 'auth/setAuth'
        })
    },
    computed: {
        ...mapGetters({
            getCartProductLength: 'shop/getCartProductLength',
            getAuth: 'auth/getAuth',
        })
    },
}
</script>

<style scoped lang="scss">
.header {
    font-weight: 500;
    margin-bottom: 45px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    margin-top: 54px;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;

    &__image {
        width: 18px;
        height: 25px;
        background-image: url("../../../assets/icons/Logo.svg");
    }

    &__text {
        margin-left: 15px;
        font-weight: 500;
        font-size: 16px;
        line-height: 18.78px;
        letter-spacing: 0.1em;
    }
}

.nav {
    display: flex;
    justify-content: space-between;
    flex: 1 1;
    margin-left: 7rem;
    max-width: 400px;

    &__item {
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            color: #6E9C9F;
        }
    }
}

.phone {
    display: flex;
    margin-left: 7rem;
    cursor: pointer;

    &__image {
        width: 27px;
        height: 27px;
        background-image: url("../../../assets/icons/Phone.svg");
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 15px;
        transition: .2s;

        &:hover {
            background-image: url("../../../assets/icons/phone-hover.svg");
        }
    }
}

.cart {
    width: 24px;
    height: 24px;
    background-image: url("../../../assets/icons/Shopping-bags.svg");
    cursor: pointer;
    position: relative;

    &-count {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 10px;
        right: -0.5rem;
        top: -0.5rem;
        background: #998E78;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
}

.menu {
    display: none;
    background-image: url("../../../assets/icons/burger.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;

    &__item {
        cursor: pointer;
        transition: 0.2s;
        border-bottom: 1px solid black;
        text-align: center;
        margin-bottom: 1rem;

        &:hover {
            color: #6E9C9F;
            border-bottom: 1px solid #6E9C9F;
        }
    }
}

.active {
    color: #6E9C9F;
    border-bottom: 1px solid #6E9C9F;
}

@media screen and (max-width: 980px) {
    .menu {
        display: block;
        position: relative;

        &__list {
            position: fixed;
            left: 0;
            width: 100%;
            height: 100%;
            top: 7rem;
            z-index: 100;
            color: black;
            background: #ffffff;
        }
    }

    .nav {
        display: none;
    }

    .phone {
        margin-left: 0;
    }
}

@media screen and (max-width: 480px) {
    .header {
        flex-direction: column;

        & > * {
            margin-bottom: 2rem;
        }

        .menu {
            order: 5;

            &__list {
                top: 18rem;
            }
        }
    }
}
</style>