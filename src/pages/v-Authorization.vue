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
            type="password"
            v-model.trim="v$.form.password.$model"
            placeholder="Введите пароль"></v-input>
        <v-button @click="signIn()" style-type="btn-success">Войти</v-button>
        <div class="registration" @click="$router.push('/registration')">Регистрация</div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import {useVuelidate} from "@vuelidate/core";
import validatorRequired from "@/core/validators/validator-required";
import {mapMutations} from "vuex";
import validatorEmail from "@/core/validators/validator-email";
import {login} from "@/core/http/userAPI";
import VInput from "@/core/components/UI/v-Input";
export default {
    components: {VButton, VInput},
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form : {
                email: '',
                password: ''
            }
        }
    },
    validations: {
        form: {
            email: {
                validatorRequired: validatorRequired('Введите Email'),
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
        async signIn() {
            try {
                await login(this.form).then(res => {
                    this.setAuth({auth: true, role: res.role});
                    if (this.$route.query.nextUrl) {
                        this.$router.push(this.$route.query.nextUrl);
                    } else {
                        this.$router.push('/');
                    }
                    this.$notification({
                        title: 'Успешно',
                        description: 'Пользователь успешно авторизован',
                        type: 'success'
                    })
                })
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка авторизации',
                    type: 'error'
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.registration {
    cursor: pointer;
    color: #509498;
    transition: 0.3s ease;

    &:hover {
        color: #ffcc00;
    }
}
</style>