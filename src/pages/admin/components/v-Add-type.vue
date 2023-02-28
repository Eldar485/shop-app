<template>
    <div class="modal-content__title">Добавить тип</div>
    <v-input v-validate-directive="v$.typeForm.name" v-model.trim="v$.typeForm.name.$model"
             class="modal-content__input" style-type="input-text" placeholder="Название"></v-input>
    <v-button :disabled="v$.typeForm.$invalid"
              :class="{'disabled': v$.typeForm.$invalid}"
              class="modal-content__button"
              @click="addType()"
              style-type="btn-about">Добавить тип</v-button>
</template>

<script>
import validatorRequired from "@/core/validators/validator-required";
import {useVuelidate} from "@vuelidate/core";
import {addType} from "@/core/http/adminAPI";
import {mapActions} from "vuex";
import VButton from "@/core/components/UI/v-Button";
import VInput from "@/core/components/UI/v-Input";

export default {
    components: {VButton, VInput},
    setup() {
        return {v$: useVuelidate()}
    },
    data() {
        return {
            typeForm: {
                name: ''
            }
        }
    },
    methods: {
        async addType() {
            try {
                await addType(this.typeForm)
                this.$notification({
                    title: 'Успешно',
                    description: 'Тип создан',
                    type: 'success'
                })
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка создания типа',
                    type: 'error'
                })
            }
        },
        ...mapActions({
            fetchFilters: 'shop/fetchFilters'
        })
    },
    validations: {
        typeForm: {
            name: {
                validatorRequired: validatorRequired('Введите название'),
            }
        }
    }
}
</script>

<style scoped lang="scss">
.modal-content {
    width: 40vw;

    & > * {
        margin-bottom: 3rem;
    }

    &__title {
        font-weight: 500;
        font-size: 2rem;
    }

    &__button {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
}

.disabled {
    background: #9C9C9C;

    &:hover {
        background: #9C9C9C;
        cursor: inherit;
    }
}

@media screen and (max-width: 600px) {
    .modal-content {

        &__title {
            font-size: 1.5rem;
        }

        &__button {
            width: 100%;
            height: 1rem;
            align-items: center;
            font-size: 1rem;
        }
    }
}
</style>