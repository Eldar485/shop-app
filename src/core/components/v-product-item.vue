<template>
    <div class="item">
        <div class="image">
            <div class="item__select"></div>
            <img class="item__image" :src="`http://localhost:5000/${product.image}`" alt="">
        </div>
        <div class="item__name">{{ product.name }}</div>
        <div class="item__price">${{ product.price }}</div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.item {
    cursor: pointer;
    max-width: 21rem;
    max-height: 34.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__select {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 29rem;
        background-color: rgba(136, 171, 173, .6);
        background-image: url("../../assets/icons/arrow-white-right.svg");
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0;
        transition: 0.2s;

        &:hover {
            opacity: 1;
        }
    }

    .image {
        position: relative;
        margin-bottom: 1.5rem;
    }

    &__image {
        max-width: 21rem;
        max-height: 29rem;
        width: 21rem;
        height: 30rem;
    }

    &__name {
        font-size: 1.25rem;
        letter-spacing: 0.02em;
        margin-bottom: 0.4375rem;
    }

    &__price {
        font-size: 0.9375rem;
        color: #998E78;
    }
}

@media screen and (max-width: 390px) {
    .item {
        &__image {
            max-width: 19rem;
            max-height: 27rem;
        }
    }
}
</style>