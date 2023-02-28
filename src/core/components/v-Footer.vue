<template>
    <div class="footer">
        <div class="footer__content">
            <div class="content__item info">
                <div class="info__logo logo">
                    <div class="logo__image"></div>
                    <div class="logo__text">WOMAZING</div>
                </div>
                <div class="info__rights">
                    <div>© Все права защищены</div>
                    <div>Политика конфиденциальности</div>
                    <div>Публичная оферта</div>
                </div>
            </div>
            <div class="content__item nav">
                <div class="nav__item" @click="$router.push('/')">Главная</div>
                <div class="nav__item shop">
                    <div class="shop__title" @click="$router.push('/shop')">Магазин</div>
                    <div class="shop__items">
                        <div v-for="filter in getFilters"
                             :key="filter"
                             @click="changeFilter(filter.id)">
                            {{ filter.name }}
                        </div>
                    </div>
                </div>
                <div class="nav__item" @click="$router.push('/about')">О бренде</div>
                <div class="nav__item" @click="$router.push('/contacts')">Контакты</div>
            </div>
            <div class="content__item contacts">
                <div class="contacts__contact">
                    <div>+7 (495) 823-54-12</div>
                    <div>hello@womazing.com</div>
                </div>
                <div class="contacts__social social">
                    <div class="social__item-inst"></div>
                    <div class="social__item-face"></div>
                    <div class="social__item-twit"></div>
                </div>
                <div class="contacts__card"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    computed: {
        ...mapGetters({
            getFilters: 'shop/getFilters',
        })
    },
    methods: {
        ...mapMutations({
            setPage: 'shop/setPage',
            setCurrentFilter: 'shop/setCurrentFilter',
        }),
        ...mapActions({
            fetchProducts: 'shop/fetchProducts'
        }),
        changeFilter(filter) {
            this.setPage(1)
            this.setCurrentFilter(filter)
            this.fetchProducts()
            this.$router.push('/shop')
        }
    }
}
</script>

<style scoped lang="scss">
.footer {
    height: 10rem;
    background: #F1EADC;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 6rem 0;

    &__content {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        min-height: 150px;
    }
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;

        &__image {
            width: 18px;
            height: 25px;
            background-image: url("../../assets/icons/Logo.svg");
        }

        &__text {
            margin-left: 15px;
        }
    }
}

.nav {
    display: flex;
    flex: 1 0;
    margin-left: 5rem;

    &__item {
        margin: 0 2rem;
        cursor: pointer;
        height: 1rem;
    }

    .shop {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__items * {
            margin-top: 0.7rem;
            font-size: 13px;
        }
    }
}

.contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__contact {
        display: flex;
        flex-direction: column;
    }

    &__card {
        align-self: flex-end;
        width: 68px;
        height: 22px;
        background-image: url("../../assets/icons/visa.svg");
    }
}

.social {
    display: flex;
    justify-content: flex-end;

    &__item {

        &-inst {
            width: 22px;
            height: 22px;
            background-image: url("../../assets/icons/instagram.svg");
        }

        &-face {
            margin-left: 0.5rem;
            width: 22px;
            height: 22px;
            background-image: url("../../assets/icons/facebook.svg");
        }

        &-twit {
            margin-left: 0.5rem;
            width: 22px;
            height: 22px;
            background-image: url("../../assets/icons/twitter.svg");
        }
    }
}

@media screen and (max-width: 980px) {
    .footer {
        &__content {
            flex-direction: column;
        }
    }

    .nav {
        margin-left: 0;

        &__item {
            margin: 2rem 4rem 2rem 0;
        }

        .shop {
            display: none;
        }
    }

    .contacts {
        flex-direction: row;

        &__card {
            align-self: flex-start;
        }
    }
}

@media screen and (max-width: 430px) {
    .footer {
        height: auto;

        &__content {
            align-items: center;
        }
    }

    .nav {
        flex-direction: column;
        align-items: center;

        &__item {
            margin: 2rem 0 2rem 0;
        }

        .shop {
            display: none;
        }
    }

    .contacts {
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: 1rem;
        }

        &__card {
            align-self: center;
        }
    }
}

</style>