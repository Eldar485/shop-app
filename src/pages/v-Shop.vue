<template>
    <v-main-title class="main-title" title="Магазин" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div class="shop">
        <div class="shop__filters">
            <v-button
                v-for="filter in getFilters"
                :class="{'active': getCurrentFilter === filter.id}"
                :key="filter" @click="changeFilter(filter.id)"
                class="btn-filter"
                style-type="btn-black">{{ filter.name }}</v-button>
        </div>
        <div class="shop__products products">
            <div class="products__count">
                Показано: {{ getTotalProductCount !== 0 ? getCurrentPage === pageCount ? getTotalProductCount : getLimit * getCurrentPage : 0 }} из {{getTotalProductCount}} товаров</div>
            <div class="products__list">
                <v-product-item v-for="product in getProducts" :key="product.id" @click="$router.push(`/shop/${product.id}`)" :product="product"></v-product-item>
            </div>
            <div class="products__count last">
                Показано: {{ getTotalProductCount !== 0 ? getCurrentPage === pageCount ? getTotalProductCount : getLimit * getCurrentPage : 0 }} из {{getTotalProductCount}} товаров</div>
            <div class="products__btns">
                <a class="prev" v-if="getCurrentPage !== 1" @click="changePage(getCurrentPage - 1)"></a>
                <v-button v-for="page in pageCount"
                          :key="page"
                          :class="{'active': page === getCurrentPage}"
                          class="btn-page"
                          style-type="btn-black"
                          @click="changePage(page)"
                >{{ page }}</v-button>
                <a class="next" v-if="getCurrentPage !== pageCount" @click="changePage(getCurrentPage + 1)"></a>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VMainTitle from "@/core/components/UI/v-Main-title";
import {mapActions, mapGetters, mapMutations} from "vuex";
import VProductItem from "@/core/components/v-product-item";
export default {
    components: {VProductItem, VMainTitle, VButton},

    computed: {
        ...mapGetters({
            getCurrentPage: 'shop/getCurrentPage',
            pageCount: 'shop/pageCount',
            getProducts: 'shop/getProducts',
            getTotalProductCount: 'shop/getTotalProductCount',
            getLimit: 'shop/getLimit',
            getFilters: 'shop/getFilters',
            getCurrentFilter: 'shop/getCurrentFilter'
        })
    },
    methods: {
        ...mapMutations({
            setPage: 'shop/setPage',
            setCurrentFilter: 'shop/setCurrentFilter',
            clearFilters: 'shop/clearFilters',
        }),
        ...mapActions({
            fetchProducts: 'shop/fetchProducts'
        }),
        changePage(page) {
            this.setPage(page)
            this.fetchProducts()
        },
        changeFilter(filter) {
            this.setPage(1)
            this.setCurrentFilter(filter)
            this.fetchProducts()
        }
    }
}
</script>

<style scoped lang="scss">
.shop {
    &__filters {
        display: flex;
        margin-bottom: 5.625rem;
        flex-wrap: wrap;

        .btn-filter {
            font-weight: 500;
            margin-right: 0.625rem;
            margin-bottom: 0.625rem;
        }
    }
    .products {
        &__count {
            margin-bottom: 4.0625rem;
            font-size: 1.0625rem;
            color: #808080;
        }
        &__btns {
            margin-bottom: 8.125rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .prev {
                cursor: pointer;
                margin-right: 1rem;
                width: 1.8rem;
                height: 1rem;
                background-image: url("../assets/icons/arrow.svg");

                &:hover {
                    Transform: scale(-1, 1);
                    background-image: url("../assets/icons/arrow-active.svg");
                }
            }
            .next {
                cursor: pointer;
                width: 1.8rem;
                height: 1rem;
                background-image: url("../assets/icons/arrow.svg");
                Transform: scale(-1, 1);
                margin-left: 0.3rem;

                &:hover {
                    Transform: scale(1, 1);
                    background-image: url("../assets/icons/arrow-active.svg");
                }
            }
            .btn-page {
                cursor: pointer;
                margin-right: 0.5rem;
                max-width: 5rem;
                padding: 0.625rem 1rem;

            }
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, max-content));
            grid-gap: 24px;
            justify-items: center;
        }
        .last {
            margin: 4.0625rem 0;
        }
    }
}

.active {
    background: #000000;
    color: #FFFFFF;
}

.main-title {
    margin: 12.5rem 0;
}

@media screen and (max-width: 1137px) {
    .shop {
        .products {
            &__list {
                grid-template-columns: 1fr 1fr;
                align-content: center;

            }
        }
    }
}

@media screen and (max-width: 735px) {
    .shop {
        .products {
            &__list {
                grid-template-columns: 1fr;
                align-content: center;
            }
        }
    }
}

@media screen and (max-width: 1110px) {
    .shop {
        &__filters {
            .btn-filter {
                margin-bottom: 1rem;
            }
        }
    }
}

@media screen and (max-width: 745px) {
    .shop {
        &__filters {
            flex-direction: column;
            align-items: center;

            .btn-filter {
                width: 100%;
                padding: 1.25rem 1.0625rem;
            }
        }
    }
}

@media screen and (max-width: 400px) {

}
</style>