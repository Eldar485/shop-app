<template>
    <div class="order">
        <div class="order__title">Ваш заказ</div>
        <div class="order__info info">
            <div class="info__item">
                <div>Товар</div>
                <div>Всего</div>
            </div>
            <div class="info__item" v-for="product in getCartProducts" :key="product.id">
                <div>{{ product.name }}</div>
                <div>${{ product.price * product.count }}</div>
            </div>
            <div class="info__item">
                <div>Подытог</div>
                <div>${{ getFullPrice }}</div>
            </div>
            <div class="info__item">
                <div>Итого</div>
                <div>${{ getFullPrice }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters({
            getCartProducts: 'shop/getCartProducts',
            getFullPrice: 'shop/getFullPrice'
        })
    }
}
</script>

<style scoped lang="scss">
.order {
    max-width: 16rem;
    width: 100%;

    &__title {
        font-size: 1.56rem;
        margin-bottom: 2.8rem;
        font-weight: 500;
    }
}

.info {
    &__item {
        margin-bottom: 1.8rem;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;

        &:first-child {
            font-size: 1.25rem;
        }

        &:last-child {
            font-size: 1.25rem;
            margin-bottom: 0;
            background: #F1EADC;
            padding: 15px 18px;
            margin-left: -1rem;
        }
    }
}
</style>