<template>
    <div class="call-back" v-if="!formComplete">
        <div class="call-back__title">Заказать обратный звонок</div>
        <v-input v-validate-directive="v$.callbackForm.name" v-model.trim="v$.callbackForm.name.$model"
                 class="call-back__input" style-type="input-text" placeholder="Имя"></v-input>
        <v-input v-validate-directive="v$.callbackForm.email" v-model.trim="v$.callbackForm.email.$model"
                 class="call-back__input" style-type="input-text" placeholder="E-mail"></v-input>
        <v-input v-validate-directive="v$.callbackForm.phone" v-model.trim="v$.callbackForm.phone.$model"
                 class="call-back__input" style-type="input-text" placeholder="Телефон"></v-input>
        <v-button :disabled="v$.callbackForm.$invalid"
                  :class="{'disabled': v$.callbackForm.$invalid}"
                  class="call-back__button"
                  @click="formComplete = true"
                  style-type="btn-about">Заказать звонок
        </v-button>
    </div>
    <div class="call-back" v-if="formComplete">
        <div class="call-back__title">Отлично! Мы скоро вам перезвоним.</div>
        <v-button class="call-back__button-complete"
                  @click="hideDialog()"
                  style-type="btn-success">Закрыть
        </v-button>
    </div>
</template>

<script>
import validatorRequired from "@/core/validators/validator-required";
import validatorEmail from "@/core/validators/validator-email";
import {useVuelidate} from "@vuelidate/core";
import toggleMixin from "@/core/mixins/toggleMixin";
import VButton from "@/core/components/UI/v-Button";
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VButton, VInput},
    setup() {
        return {v$: useVuelidate()}
    },
    mixins: [toggleMixin],
    data() {
        return {
            formComplete: false,
            callbackForm: {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
    validations: {
        callbackForm: {
            name: {
                validatorRequired: validatorRequired('Введите имя'),
            },
            email: {
                validatorRequired: validatorRequired('Введите Email'),
                validatorEmail: validatorEmail('Введите корректный Email')
            },
            phone: {
                validatorRequired: validatorRequired('Введите телефон'),
            },
        }
    },
}
</script>

<style scoped lang="scss">
.disabled {
    background: #9C9C9C !important;

    &:hover {
        background: #9C9C9C !important;
        cursor: inherit;
    }
}

.call-back {
    width: 40vw;
    font-weight: 500;

    &__title {
        font-size: 2rem;
        letter-spacing: 0.02em;
        margin-bottom: 2.1875rem;
    }

    &__input {
        margin-bottom: 2.1875rem;
    }

    &__button {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    &__button-complete {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 60%;
        font-size: 2rem;
    }

}

@media screen and (max-width: 860px) {
    .call-back {
        &__title {
            font-size: 1.5rem;
        }
        &__button-complete {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            width: 60%;
            font-size: 1.5rem;
        }
    }
}

@media screen and (max-width: 610px) {
    .call-back {
        width: 60vw;

        &__title {
            font-size: 1rem;
        }
        &__button {
            width: 100% !important;
            height: 1rem !important;
            align-items: center !important;
            font-size: 1rem !important;
        }
    }
}
</style>