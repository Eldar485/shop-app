<template>
    <div class="product">
        <div class="title">
            <v-main-title :title="product.name" :breadcrumb="$breadcrumbs.value" :product="true"></v-main-title>
        </div>
        <div class="product__description">
            <product-description :product="product"></product-description>
        </div>
        <div class="product__relate">
            <related-products></related-products>
        </div>
    </div>
</template>

<script>
import ProductDescription from "@/pages/product-item/components/v-Product-description";
import RelatedProducts from "@/pages/product-item/components/v-Related-products";
import VMainTitle from "@/core/components/UI/v-Main-title";
import axios from "axios";

export default {
    components: {VMainTitle, RelatedProducts, ProductDescription},
    data() {
        return {
            product: {}
        }
    },
    async mounted() {
        try {
            const response = await axios.get(`http://localhost:5000/api/product/${Number(this.$route.params.id)}`)
            this.product = response.data
        } catch (e) {
            this.$notification({
                title: 'Ошибка',
                description: 'ШОшибка подгрузки товаров',
                type: 'error'
            })
        }
    }
}
</script>

<style scoped lang="scss">
.title {
    margin: 4.25rem 0 6.25rem 0;
}

.product {
    &__description {
        margin-bottom: 8.125rem;
    }

    &__relate {
        margin-bottom: 8.125rem;
    }
}

@media screen and (max-width: 1060px) {
    .product {
        &__description {
            margin-bottom: 0;
        }

        &__relate {
            margin-bottom: 8.125rem;
        }
    }
}
</style>