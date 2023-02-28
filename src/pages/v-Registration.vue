<template>
    <div>
        <v-input
            v-validate-directive="v$.form.email"
            style-type="input-text"
            v-model.trim="v$.form.email.$model"
            placeholder="Введите почту"></v-input>
        <v-input
            v-validate-directive="v$.form.password"
            style-type="input-text"
            v-model.trim="v$.form.password.$model"
            placeholder="Введите пароль"></v-input>
        <v-button @click="registration()" style-type="btn-success">Зарегистрироваться</v-button>
        <div class="authorization" @click="$router.push('/authorization')">Авторизация</div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import {useVuelidate} from "@vuelidate/core";
import validatorRequired from "@/core/validators/validator-required";
import {mapMutations} from "vuex";
import {registration} from "@/core/http/userAPI";
import validatorEmail from "@/core/validators/validator-email";
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VButton, VInput},
    setup() {
        return {v$: useVuelidate()}
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    validations: {
        form: {
            email: {
                validatorRequired: validatorRequired('Введите логин'),
                validatorEmail: validatorEmail('Введите корректный Email')
            },
            password: {
                validatorRequired: validatorRequired('Введите пароль'),
            }
        }
    },
    methods: {
        ...mapMutations({
            setAuth: 'auth/setAuth'
        }),
        async registration() {
            try {
                await registration(this.form)
                this.$notification({
                    title: 'Успешно',
                    description: 'Пользователь успешно зарегистрирован',
                    type: 'success'
                })
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка регистрации',
                    type: 'error'
                })
            }
            this.$router.push('/authorization')
        }
    }
}
</script>

<style scoped lang="scss">
.authorization {
    cursor: pointer;
    color: #509498;
    transition: 0.3s ease;

    &:hover {
        color: #ffcc00;
    }
}
</style>