<template>
    <tr class="item">
        <td class="item__info">
            <div class="item__delete"></div>
            <img class="item__image" :src="`http://localhost:5000/${product.image}`" alt="">
            <div class="item__name">{{ product.name }}</div>
        </td>
        <td class="item__price">${{ product.price }}</td>
        <td class="item__amount">
            <v-input
                v-validate-directive="v$.product.count"
                class="input"
                type="number"
                :modelValue="v$.product.count.$model"
                @input="changeCartProductCount({id: product.id, count: $event.target.value})"
                style-type="input-count">
            </v-input>
        </td>
        <td class="item__all-price">${{ product.price * product.count }}</td>
    </tr>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {mapMutations} from "vuex";
import validatorRequired from "@/core/validators/validator-required";
import validatorMinValue from "@/core/validators/validator-min-value";
import validatorMaxValue from "@/core/validators/validator-max-value";
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VInput},
    setup() {
        return {v$: useVuelidate()}
    },
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        ...mapMutations({
            changeCartProductCount: 'shop/changeCartProductCount'
        })
    },
    validations: {
        product: {
            count: {
                validatorRequired: validatorRequired('Введите хотябы 1 символ'),
                validatorMinValue: validatorMinValue('Введите число больше 0', 1),
                validatorMaxValue: validatorMaxValue('Введите число больше 100', 100),
            }
        }
    }
}
</script>

<style scoped lang="scss">
img {
    max-width: 8.5rem;
}

.input {
    width: 3rem;
    height: 3rem;
}

.item {
    &__info {
        display: flex;
        align-items: center;
        max-width: 20rem;
        justify-content: space-between;
    }
    &__delete {
        background-image: url("../../../assets/icons/delete.svg");
        background-position: center;
        background-repeat: no-repeat;
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
    &__name {
        max-width: 7rem;
    }
    & > * {
        min-width: 7rem;
        margin-bottom: 1rem;
    }
}
</style>