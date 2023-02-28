<template>
    <div class="modal-content__title">Добавить продукт</div>
    <v-input v-validate-directive="v$.productForm.name" v-model.trim="v$.productForm.name.$model"
             class="modal-content__input" style-type="input-text" placeholder="Название"></v-input>
    <v-input v-validate-directive="v$.productForm.price" v-model.trim="v$.productForm.price.$model"
             class="modal-content__input" style-type="input-text" placeholder="Цена"></v-input>
    <v-input-file class="modal-content__input file" @change="addFile($event)" style-type="input-file"></v-input-file>
    <v-select class="select" @selectOption="optionSelect" v-model:selectedOption="productForm.type" :options="types"
              style-type="select"></v-select>
    <v-button :disabled="v$.productForm.$invalid"
              :class="{'disabled': v$.productForm.$invalid}"
              class="modal-content__button"
              @click="addProduct()"
              style-type="btn-about">Добавить продукт
    </v-button>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {mapGetters} from "vuex";
import {addProduct} from "@/core/http/adminAPI";
import validatorRequired from "@/core/validators/validator-required";
import VInputFile from "@/core/components/UI/v-Input-file";
import VButton from "@/core/components/UI/v-Button";
import VInput from "@/core/components/UI/v-Input";
import VSelect from "@/core/components/UI/v-Select";

export default {
    components: {VButton, VInput, VInputFile, VSelect},
    setup() {
        return {v$: useVuelidate()}
    },
    mounted() {
        this.types = this.getFilters
        this.types = this.types.map(filter => {
            return {value: filter.id, name: filter.name}
        })
    },
    data() {
        return {
            types: [],
            productForm: {
                name: '',
                price: '',
                image: null,
                type: null
            }
        }
    },
    computed: {
        ...mapGetters({
            getFilters: 'shop/getFilters'
        })
    },
    methods: {
        optionSelect(option) {
            this.productForm.type = option
        },
        addFile(file) {
            this.productForm.image = file.target.files[0]
        },
        async addProduct() {
            const formData = new FormData()
            formData.append('name', this.productForm.name)
            formData.append('price', this.productForm.price)
            formData.append('typeId', this.productForm.type.value)
            formData.append('image', this.productForm.image)
            try {
                await addProduct(formData)
                this.$notification({
                    title: 'Успешно',
                    description: 'Товар создан',
                    type: 'success'
                })
            } catch (e) {
                this.$notification({
                    title: 'Ошибка',
                    description: 'Ошибка создания товара',
                    type: 'error'
                })
            }
        }
    },
    validations: {
        productForm: {
            name: {
                validatorRequired: validatorRequired('Введите название'),
            },
            price: {
                validatorRequired: validatorRequired('Введите цену'),
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
        width: 100%;
    }

    .file {
        width: 19.7rem;
    }

    &__button {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
}

.select {
    max-width: 20rem;
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
            display: flex;
            align-items: center;
            font-size: 1rem;
        }
    }
}
</style>