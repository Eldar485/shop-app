<template>
    <div class="related">
        <div class="related__title">Связанные товары</div>
        <div class="related__products">
            <v-product-item v-for="product in getNewCollection" :key="product.id" @click="$router.push(`/shop/${product.id}`)" :product="product"></v-product-item>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VProductItem from "@/core/components/v-product-item";

export default {
    components: {VProductItem},
    mounted() {
        this.fetchNewCollection()
    },
    computed: {
        ...mapGetters({
            getNewCollection: 'shop/getNewCollection'
        })
    },
    methods: {
        ...mapActions({
            fetchNewCollection: 'shop/fetchNewCollection'
        })
    }
}
</script>

<style scoped lang="scss">
.related {
    &__title {
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 4.2rem;
    }

    &__products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .item {
        max-width: 21rem;
        max-height: 34.875rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__image {
            max-width: 21rem;
            max-height: 29rem;
            width: 100%;
            height: 100%;
            margin-bottom: 1.5rem;
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
}

@media screen and (max-width: 1112px) {
    .related {
        &__products {
            justify-content: space-around;
        }
    }
}

@media screen and (max-width: 500px) {
    .related {
        &__title {
            font-size: 1.5rem;
        }

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            &__image {
                max-width: 21rem;
                max-height: 20rem;
                width: 100%;
                height: 100%;
                margin-bottom: 1.5rem;
            }
        }
    }
}
</style>