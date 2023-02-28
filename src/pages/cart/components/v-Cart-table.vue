<template>
    <div class="table">
        <table>
            <thead>
                <tr class="table__row">
                    <th class="table__column-head">Товар</th>
                    <th class="table__column-head">Цена</th>
                    <th class="table__column-head">Количество</th>
                    <th class="table__column-head">Всего</th>
                </tr>
            </thead>
            <tbody>
                <v-cart-item class="table__item" v-for="product in getCartProducts" :key="product.id" :product="product"></v-cart-item>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {useVuelidate} from "@vuelidate/core";
import validatorRequired from "@/core/validators/validator-required";
import validatorMinValue from "@/core/validators/validator-min-value";
import validatorMaxValue from "@/core/validators/validator-max-value";
import VCartItem from "@/pages/cart/components/v-Cart-item";

export default {
    name: 'v-cart',
    components: {VCartItem},
    setup() {
        return {v$: useVuelidate()}
    },
    props: {
        getCartProducts: {
            type: Array
        }
    },
    data() {
        return {
            cartProducts: {
                type: Object
            },
        }
    },
    computed: {
        ...mapGetters({
            getCartProductLength: 'shop/getCartProductLength',
        })
    },
    methods: {
        ...mapMutations({
            changeCartProductCount: 'shop/changeCartProductCount'
        })
    },
    validations: {
        getCartProducts: {
            validatorRequired: validatorRequired('Введите хотябы 1 символ'),
            validatorMinValue: validatorMinValue('Введите число больше 0', 1),
            validatorMaxValue: validatorMaxValue('Введите число больше 100', 100),
        }
    },
}
</script>

<style scoped lang="scss">
.table {
    width: 100%;
    table {
        width: 100%;
        border-collapse: collapse;
    }
    &__row {
        border-bottom: 1px solid #CCCCCC;
        padding-bottom: 10rem;
    }

    tbody {
        &:first-child {
            margin-top: 5rem;
        }
    }

    &__item {
        height: 10rem;
    }

    &__column-head {
        padding: 1.625rem 0;
        text-align: left;
        font-weight: 500;
        font-size: 20px;
    }
    tbody:before {
        content: "@";
        display: block;
        line-height: 3.125rem;
        opacity: 0;
    }
}
</style>