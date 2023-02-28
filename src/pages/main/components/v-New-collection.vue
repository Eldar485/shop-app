<template>
    <div class="new-collection">
        <v-product-item v-for="product in getNewCollection" :key="product.id" @click="$router.push(`/shop/${product.id}`)" :product="product"></v-product-item>
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
.new-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    justify-content: space-between;
}
@media screen and (max-width: 1112px) {
    .new-collection {
        margin: 0 auto;
        max-width: 40rem;
    }
    .related {
        &__products {
            justify-content: space-around;
        }
    }
}
@media screen and (max-width: 742px) {
    .new-collection {
        max-width: 100%;
        justify-content: center;
    }
    .related {
        &__title {
            font-size: 2rem;
        }
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            &__image {
                max-width: 15rem;
                max-height: 15rem;
                width: 100%;
                height: 100%;
                margin-bottom: 1.5rem;
            }
        }
    }
}
</style>