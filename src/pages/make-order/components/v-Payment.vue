<template>
    <div class="payment">
        <div class="payment__title">Способы оплаты</div>
        <div class="payment__checkbox">
            <input class="custom-checkbox" type="checkbox" id="cash" checked/>
            <label for="cash">Оплата наличными</label>
        </div>
        <v-button
            :disabled="validate.$invalid"
            :class="{'disabled': validate.$invalid}"
            class="payment__button"
            style-type="btn-about"
            @click="createOrder()"
        >
            Разместить заказ
        </v-button>
    </div>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {mapMutations} from "vuex";
import VButton from "@/core/components/UI/v-Button";

export default {
    components: {VButton},
    setup () {
        return { v$: useVuelidate() }
    },
    props: {
        validate: {
            type: Object
        }
    },
    methods: {
        createOrder() {
            this.clearCart()
            this.$router.push('/make-order/order-placed')
        },
        ...mapMutations({
            clearCart: 'shop/clearCart'
        })
    }
}
</script>

<style scoped lang="scss">
.payment {
    display: flex;
    flex-direction: column;

    &__title {
        font-size: 1.56rem;
        margin-bottom: 2.8rem;
    }
    &__checkbox {
        margin-bottom: 3.1rem;
        display: flex;
        align-items: center;

        .custom-checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }
        .custom-checkbox+label {
            display: inline-flex;
            align-items: center;
            user-select: none;
        }
        .custom-checkbox+label::before {
            content: '';
            display: inline-block;
            width: 1rem;
            height: 1rem;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #000000;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }

        .custom-checkbox:checked+label::before {
            background-image: url("../../../assets/icons/checkbox.svg");
        }

        input {
            margin-right: 1.25rem;
        }
        label {
            font-size: 1rem;
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
</style>