<template>
    <v-main-title class="main-title" title="Корзина" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div class="cart">
        <div class="cart__table">
            <v-cart :getCartProducts="getCartProducts"></v-cart>
        </div>
        <div class="cart__buttons">
            <div class="promo">
                <v-input placeholder="Введите купон" style-type="input-text"/>
                <v-button style-type="btn-success">Применить купон</v-button>
            </div>
            <v-button style-type="btn-success">Обновить корзину</v-button>
        </div>
        <div class="cart__result">
            <div>
                <div class="summary">
                    <div class="summary__title">Подытог:</div>
                    <div class="summary__value">${{ getFullPrice }}</div>
                </div>
                <div class="result">
                    <div class="result__stat stat">
                        <div class="stat__title">Итого:</div>
                        <div class="stat__value">$ {{ getFullPrice }}</div>
                    </div>
                    <v-button
                        style-type="btn-about"
                        :disabled="getCartProducts.length < 1"
                        :class="{'disabled': getCartProducts.length < 1}"
                        @click="$router.push('/make-order')">
                        Оформить заказ
                    </v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VCart from "@/pages/cart/components/v-Cart-table";
import VInput from "@/core/components/UI/v-Input";
import VButton from "@/core/components/UI/v-Button";
import VMainTitle from "@/core/components/UI/v-Main-title";
import {mapGetters} from "vuex";
export default {
    components: {VMainTitle, VButton, VInput, VCart},
    computed: {
        ...mapGetters({
            getCartProducts: 'shop/getCartProducts',
            getFullPrice: 'shop/getFullPrice'
        })
    }
}
</script>

<style scoped lang="scss">
.cart {
    font-weight: 500;
    &__table {
        width: 100%;
    }
    &__buttons {
        width: 100%;
        margin: 4.6875rem 0;
        display: flex;
        justify-content: space-between;

        .promo {
            display: flex;
            align-items: flex-end;

            input {
                margin-right: 1rem;
            }
        }
    }
    &__result {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8.125rem;

        .summary {
            display: flex;
            margin-bottom: 1.75rem;
            font-size: 1.06rem;

            &__title {
                margin-right: 1.25rem;
            }
        }
        .result {
            display: flex;

            &__stat {
                display: flex;
                background: #F1EADC;
                align-items: center;
                padding: 0 1.875rem;
                max-width: 14rem;
                width: 100%;
                margin-right: 0.9rem;
            }

            .stat {
                font-size: 1.56rem;

                &__title {
                    margin-right: 4.375rem;
                }
            }
        }
    }
}

.disabled {
    background: #9C9C9C;

    &:hover {
        background: #9C9C9C;
        cursor: inherit;
    }
}

.main-title {
    margin: 12.5rem 0;
}
</style>