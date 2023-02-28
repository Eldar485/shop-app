<template>
    <div class="data">
        <div class="data__buyer buyer">
            <div class="buyer__title">Данные покупателя</div>
            <div class="buyer__inputs">
                <v-input class="buyer__input" v-validate-directive="v$.buyerData.name" style-type="input-text"
                         v-model.trim="v$.buyerData.name.$model" placeholder="Имя"/>
                <v-input class="buyer__input" v-validate-directive="v$.buyerData.email" style-type="input-text"
                         v-model.trim="v$.buyerData.email.$model" placeholder="E-mail"/>
                <v-input class="buyer__input" v-validate-directive="v$.buyerData.phone" style-type="input-text"
                         v-mask="'+7 (###) ###-##-##'" v-model.trim="v$.buyerData.phone.$model" placeholder="Телефон"/>
            </div>
        </div>
    </div>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import validatorRequired from "@/core/validators/validator-required";
import validatorEmail from "@/core/validators/validator-email";
import {mapGetters} from "vuex";
import validatorPhone from "@/core/validators/validator-phone";
import {mask} from "vue-the-mask";
import VInput from "@/core/components/UI/v-Input";

export default {
    directives: {mask},
    components: {VInput},
    setup() {
        return {v$: useVuelidate()}
    },
    props: {
        buyerData: {
            type: Object
        }
    },
    computed: {
        ...mapGetters({
            getFullPrice: 'shop/getFullPrice',
            getCartProducts: 'shop/getCartProducts'
        })
    },
    validations: {
        buyerData: {
            name: {
                validatorRequired: validatorRequired('Введите имя'),
            },
            email: {
                validatorRequired: validatorRequired('Введите Email'),
                validatorEmail: validatorEmail('Введите корректный Email')
            },
            phone: {
                validatorRequired: validatorRequired('Введите телефон'),
                validatorPhone: validatorPhone('Введите корректный номер телефона')
            },
        }
    }
}
</script>

<style scoped lang="scss">
.data {
    display: flex;

    .buyer {
        margin-right: 19.5rem;

        &__title {
            font-size: 1.56rem;
            margin-bottom: 2.8rem;
            font-weight: 500;
        }

        &__inputs > * {

            display: flex;
            flex-direction: column;
            margin-bottom: 2.1rem;
        }

        &__input {
            width: 20rem;
        }
    }
}
</style>