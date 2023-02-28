<template>
    <div class="modal-content__title">Добавить продукт</div>
    <v-input v-validate-directive="v$.productForm.name" v-model.trim="v$.productForm.name.$model"
             class="modal-content__input" style-type="input-text" placeholder="Название"></v-input>
    <v-input v-validate-directive="v$.productForm.price" v-model.trim="v$.productForm.price.$model"
             class="modal-content__input" style-type="input-text" placeholder="Цена"></v-input>
    <v-select class="select" @selectOption="optionSelect" v-model:selectedOption="productForm.type" :options="types"
              style-type="select"></v-select>
    <div class="info">
        <div class="info__item" v-for="(item, index) in productForm.infos" :key="item.id">
            <div class="info__delete" @click="deleteItem(item)"></div>
            <v-input-file class="modal-content__input file" @change="addFile($event, index)"
                          style-type="input-file"></v-input-file>
            <div
                @click="productForm.infos[index].colorVisible = !productForm.infos[index].colorVisible"
                class="color"
                :style="{ background: productForm.infos[index].color}">
                <ColorPicker v-click-outside="() => {productForm.infos[index].colorVisible = false}"
                             @click="$event.stopPropagation()"
                             :color="productForm.infos[index].color"
                             @color-change="updateColor($event, index)"
                             class="color__picker"
                             v-if="productForm.infos[index].colorVisible"></ColorPicker>
            </div>
            <v-select
                class="select select__size"
                @selectOption="optionSizeSelect($event, index)"
                v-model:selectedOption="productForm.infos[index]"
                :options="sizes"
                style-type="select"></v-select>
        </div>
    </div>
    <v-button @click="addInfoItem()" class="modal-content__button-add" style-type="btn-add">Добавить</v-button>
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
import {ColorPicker} from 'vue-accessible-color-picker';
import VInput from "@/core/components/UI/v-Input";
import VSelect from "@/core/components/UI/v-Select";

export default {
    components: {VButton, VInputFile, ColorPicker, VInput, VSelect},
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
            sizes: [
                {value: 'S', name: 'S'},
                {value: 'M', name: 'M'},
                {value: 'L', name: 'L'},
                {value: 'XS', name: 'XS'},
                {value: 'XL', name: 'XL'}
            ],
            productForm: {
                name: '',
                price: '',
                type: null,
                infos: [{id: Date.now().toLocaleString(), name: 'S', image: null, colorVisible: false, color: 'red'}]
            }
        }
    },
    computed: {
        ...mapGetters({
            getFilters: 'shop/getFilters'
        })
    },
    methods: {
        deleteItem(item) {
            if (this.productForm.infos.length > 1)
                this.productForm.infos = this.productForm.infos.filter(i => i.id !== item.id)
        },
        updateColor(color, index) {
            this.productForm.infos[index].color = color.colors.hex;
        },
        addInfoItem() {
            this.productForm.infos.push({
                id: Date.now().toLocaleString(),
                name: 'S',
                image: null,
                colorVisible: false,
                color: 'red'
            });
        },
        optionSelect(option) {
            this.productForm.type = option;
        },
        optionSizeSelect(option, index) {
            this.productForm.infos[index].name = option.value;
        },
        addFile(file, index) {
            this.productForm.infos[index].image = file.target.files[0];
        },
        async addProduct() {
            const formData = new FormData()
            formData.append('name', this.productForm.name);
            formData.append('price', this.productForm.price);
            formData.append('typeId', this.productForm.type.value);
            formData.append('image', this.productForm.image);
            try {
                await addProduct(formData);
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
    &__button-add {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto;
        height: 0.5rem;
        width: 100%;
    }
}

.select {
    max-width: 20rem;

    &__size {
        min-width: 8rem;
    }
}

.disabled {
    background: #9C9C9C;

    &:hover {
        background: #9C9C9C;
        cursor: inherit;
    }
}

.info {
    &__item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid black;
        padding: 0.5rem 0;
    }
    &__delete {
        background-image: url("../../../assets/icons/delete.svg");
        background-position: center;
        background-repeat: no-repeat;
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
}

.color {
    cursor: pointer;
    width: 25px;
    height: 25px;

    &__picker {
        top: 4rem;
        position: absolute;
        z-index: 4;
    }
}

@media screen and (max-width: 1250px) {
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
    .info__item {
        flex-direction: column;
        min-height: 10rem;
        justify-content: space-between;
    }
    .color {
        &__picker {
            top: 7rem;
        }
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