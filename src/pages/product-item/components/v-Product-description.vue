<template>
    <div class="product">
        <div class="product__image">
            <img v-if="product.image" :src="`http://localhost:5000/${product.image}`" alt="">
        </div>
        <div class="product__description">
            <div class="product__price">
                <div class="product__price-current">${{ product.price }}</div>
                <div class="product__price-old">$450</div>
            </div>
            <div class="product__size">
                <div class="product__title">Выберите размер</div>
                <div class="product__value-sizes">
                    <div class="size"
                         v-for="size in sizes"
                         :key="size"
                         @click="currentSize = size"
                         :class="{'active': size === currentSize}">{{ size }}</div>
                </div>
            </div>
            <div>
                <div class="product__title">Выберите цвет</div>
                <div class="product__value-colors">
                    <div class="color" v-for="color in colors"
                         :key="color"
                         @click="currentColor = color"
                         :class="{'active': color === currentColor}"
                         :style="{background: color}"></div>
                </div>
            </div>
            <div class="product__count">
                <VInput v-validate-directive="v$.productCount"
                        type="number"
                        v-model.trim="v$.productCount.$model"
                        style-type="input-count">
                </VInput>
                <VButton class="btn"
                         style-type="btn-about"
                         :class="{'disabled': v$.productCount.$invalid}"
                         :disabled="v$.productCount.$invalid"
                         @click="addProduct()">
                    Добавить в корзину
                </VButton>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VInput from "@/core/components/UI/v-Input";
import {useVuelidate} from "@vuelidate/core";
import validatorMinValue from "@/core/validators/validator-min-value";
import validatorMaxValue from "@/core/validators/validator-max-value";
import validatorRequired from "@/core/validators/validator-required";
import {mapMutations} from "vuex";
export default {
    components: {VInput, VButton},
    setup () {
        return { v$: useVuelidate() }
    },
    props: {
        product: {
            type: Object
        }
    },
    data() {
        let defaultSize = [
                'S',
                'M',
                'L',
                'XS',
                'XL'
            ];
        let defaultColor = [
                '#927876',
                '#D4D4D4',
                '#FD9696',
                '#FDC796'
            ];
        return {
            sizes: defaultSize,
            colors: defaultColor,
            currentSize: defaultSize[0],
            currentColor: defaultColor[0],
            productCount: 1,
        }
    },
    validations: {
        productCount: {
            validatorRequired: validatorRequired('Введите хотябы 1 символ'),
            validatorMinValue: validatorMinValue('Введите число больше 0', 1),
            validatorMaxValue: validatorMaxValue('Введите число больше 100', 100),
        }
    },
    methods: {
        ...mapMutations({
            addToCart: 'shop/addToCart',
        }),
        addProduct() {
            let cartProduct = {};
            Object.assign(cartProduct, this.product)
            cartProduct.size = this.currentSize;
            cartProduct.color = this.currentColor;
            cartProduct.count = this.productCount;
            this.addToCart(cartProduct)
        }
    }
}
</script>

<style scoped lang="scss">
.product {
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    &__image {
        max-width: 33.5rem;
        width: 100%;
        max-height: 45.625rem;
        height: 45.625rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &__description {
        max-width: 30rem;
        width: 100%;
        max-height: 45.625rem;
        height: 45.625rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__price {
        display: flex;
        margin-bottom: 3.75rem;

        &-current {
            font-size: 2.5rem;
            color: #998E78;
            margin-right: 1.9rem;
        }
        &-old {
            font-size: 2.5rem;
            color: #9C9C9C;
            text-decoration-line: line-through ;
        }
    }
    &__title {
        font-size: 1.25rem;
        line-height: 140%;
        margin-bottom: 2.1875rem;
    }
    &__value-sizes {
        display: flex;
        gap: 1rem;
        margin-bottom: 3.75rem;

        .active {
            background: black;
            color: white;
        }

        .size {
            max-width: 2.5rem;
            max-height: 2.5rem;
            width: 100%;
            height: 2.5rem;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.06rem;
            line-height: 140%;
            cursor: pointer;

            &:hover {
                background: black;
                color: white;
            }
        }
    }
    &__value-colors {
        display: flex;
        gap: 1rem;
        margin-bottom: 3.75rem;

        .active {
            cursor: pointer;
            outline: 1px solid black;
        }

        .color {
            max-width: 2.5rem;
            max-height: 2.5rem;
            width: 100%;
            height: 2.5rem;
            background: #6E9C9F;
            border-radius: 50%;

            &:hover {
                cursor: pointer;
                outline: 1px solid black;
            }
        }
    }
    &__count {
        display: flex;
        gap: 0.7rem;

        .input-count {
            font-size: 1.7rem;
            border: 1px solid #AFAFAF;
            border-radius: 0;
        }
    }
}

.btn {
    padding: 0;
}

.disabled {
    background: #9C9C9C;

    &:hover {
        background: #9C9C9C;
        cursor: inherit;
    }
}
@media screen and (max-width: 1060px) {
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__description {
            margin-top: 1rem;
            justify-content: flex-start;
        }
    }
}
@media screen and (max-width: 500px) {
    .product {
        &__image {
            max-height: 35.625rem;
            height: 35.625rem;
        }
    }
}
@media screen and (max-width: 400px) {
    .product {
        &__image {
            max-height: 25.625rem;
            height: 25.625rem;
        }
    }
    .btn {
        padding: 1rem;
    }
}
</style>