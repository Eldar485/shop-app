<template>
    <div class="address-payment">
        <div class="address">
            <div class="address__title">Адрес получателя</div>
            <div class="address__inputs">
                <v-input class="address__input" v-validate-directive="v$.addressData.country" style-type="input-text" v-model.trim="v$.addressData.country.$model" placeholder="Страна"/>
                <v-input v-validate-directive="v$.addressData.city" style-type="input-text" v-model.trim="v$.addressData.city.$model" placeholder="Город"/>
                <v-input v-validate-directive="v$.addressData.street" style-type="input-text" v-model.trim="v$.addressData.street.$model" placeholder="Улица"/>
                <v-input v-validate-directive="v$.addressData.house" style-type="input-text" v-model.trim="v$.addressData.house.$model" placeholder="Дом"/>
                <v-input v-validate-directive="v$.addressData.flatNumber" style-type="input-text" v-model.trim="v$.addressData.flatNumber.$model" placeholder="Квартира"/>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import validatorRequired from "@/core/validators/validator-required";
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VInput},
    setup () {
        return { v$: useVuelidate() }
    },
    props: {
        addressData: {
            type: Object
        }
    },
    validations: {
        addressData: {
            country: {
                validatorRequired: validatorRequired('Введите страну'),
            },
            city: {
                validatorRequired: validatorRequired('Введите город'),
            },
            street: {
                validatorRequired: validatorRequired('Введите улицу'),
            },
            house: {
                validatorRequired: validatorRequired('Введите дом'),
            },
            flatNumber: {
                validatorRequired: validatorRequired('Введите квартиру'),
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .address-payment {
        display: flex;
        align-items: center;
        margin-top: 5rem;

        .address {
            display: flex;
            flex-direction: column;
            margin-right: 19.5rem;

            &__title {
                font-size: 1.56rem;
                margin-bottom: 2.8rem;
            }
            &__inputs > * {
                display: flex;
                flex-direction: column;
                margin-bottom: 1.8rem;
            }
            &__input {
                width: 20rem;
            }
        }
    }
</style>