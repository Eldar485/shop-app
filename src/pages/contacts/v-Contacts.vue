<template>
    <v-main-title class="main-title" title="Контакты" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div>
        <div class="map">
            <yandex-map class="map__item" :coords="coords" :zoom="10" :settings="settings">
                <ymap-marker
                    :coords="coords"
                    marker-id="123"
                    hint-content="some hint"
                />
            </yandex-map>
        </div>
        <div class="form">
            <v-info></v-info>
            <v-message :message="message" update:message="message"></v-message>
            <v-button :disabled="v$.message.$invalid" :class="{'disabled': v$.message.$invalid}" class="btn" style-type="btn-about" @click="submitMessage()">Отправить</v-button>
        </div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VMainTitle from "@/core/components/UI/v-Main-title";
import { useVuelidate } from '@vuelidate/core'
import validatorRequired from "@/core/validators/validator-required";
import validatorEmail from "@/core/validators/validator-email";
import VInfo from "@/pages/contacts/components/v-Info";
import VMessage from "@/pages/contacts/components/v-Message";
import { yandexMap, ymapMarker  } from 'vue-yandex-maps'

export default {
    setup () {
        return { v$: useVuelidate() }
    },
    components: {VMessage, VInfo, VMainTitle, VButton, yandexMap, ymapMarker },
    data() {
        return {
            messages: [],
            message: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            coords: [48.722290, 44.528643],
            settings: {
                apiKey: 'ccac5490-be38-4709-ba3e-d6a05c212e4e',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1',
            }
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
            },
            message: {
                validatorRequired: validatorRequired('Введите сообщение'),
            }
        }
    },
    methods: {
        submitMessage() {
            this.$notification({
                title: 'Успешно',
                description: 'Сообщение успешно отправлено',
                type: 'success'
            })
        }
    }
}
</script>

<style scoped lang="scss">
.map {
    width: 100%;
    height: 31.7rem;
    background: #DDDDDD;
    margin-bottom: 8.6rem;

    &__item {
        height: 100%;
    }
}

.main-title {
    margin: 12.5rem 0;
}

.btn {
    max-width: 12rem;
    margin-bottom: 4.1rem;
}

.disabled {
    background: #9C9C9C;

    &:hover {
        background: #9C9C9C;
        cursor: inherit;
    }
}

@media screen and (max-width: 690px) {
    .map {
        margin-bottom: 3rem;
    }

    .btn {
        max-width: 100%;
        width: 100%;
        margin: 0 auto 4.1rem auto;
    }

    .success-message {
        margin-bottom: 3rem;
    }
}
</style>