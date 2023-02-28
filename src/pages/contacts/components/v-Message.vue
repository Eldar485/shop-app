<template>
    <div class="message">
        <div class="message__title">Напишите нам</div>
        <v-input
            v-validate-directive="v$.message.name"
            @input="changeMessage($event, 'name')"
            :modelValue="v$.message.name.$model"
            class="message__input" placeholder="Имя"
            style-type="input-text"
        />
        <v-input
            v-validate-directive="v$.message.email"
            @input="changeMessage($event, 'email')"
            :modelValue="v$.message.email.$model"
            class="message__input" placeholder="Email"
            style-type="input-text"
        />
        <v-input
            v-validate-directive="v$.message.phone"
            @input="changeMessage($event, 'phone')"
            type="tel"
            v-mask="'+7 (###) ###-##-##'"
            :modelValue="v$.message.phone.$model"
            class="message__input" placeholder="Телефон"
            style-type="input-text"
        />
        <v-text-area
            v-validate-directive="v$.message.message"
            @input="changeMessage($event, 'message')"
            :modelValue="v$.message.message.$model"
            class="message__input" placeholder="Сообщение"
            style-type="textarea-message"
        />
        </div>
</template>

<script>

import {useVuelidate} from "@vuelidate/core";
import validatorRequired from "@/core/validators/validator-required";
import validatorEmail from "@/core/validators/validator-email";
import VTextArea from "@/core/components/UI/v-TextArea";
import validatorPhone from "@/core/validators/validator-phone";
import {mask} from 'vue-the-mask'
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VTextArea, VInput},
    directives: {mask},
    setup () {
        return { v$: useVuelidate() }
    },
    props: {
        message: {
            type: Object
        }
    },
    methods: {
        changeMessage(e, name) {
            let newMessage = this.message;
            newMessage[name] = e.target.value

            this.$emit('update:message', newMessage)
        }
    },
    validations: {
        message: {
            name: {
                validatorRequired: validatorRequired('Введите имя'),
            },
            email: {
                validatorRequired: validatorRequired('Введите Email'),
                validatorEmail: validatorEmail('Введите корректный Email')
            },
            phone: {
                validatorRequired: validatorRequired('Введите телефон'),
                validatorPhone: validatorPhone('Введите корректный телефон'),
            },
            message: {
                validatorRequired: validatorRequired('Введите сообщение'),
            }
        }
    }
}
</script>

<style scoped lang="scss">
.message {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    max-width: 29.5rem;
    margin-bottom: 2.3rem;

    & > * {
        margin-bottom: 2.3rem;
    }
    &__title {
        font-size: 1.7rem;
        margin-bottom: 4rem;
    }
    &__input {
        max-width: 23.3rem;
    }
}
</style>