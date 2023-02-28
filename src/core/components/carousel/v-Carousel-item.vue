<template>
    <div v-if="data_type === 'image'" class="item-image">
        <img :src="require(`../../../assets/images/${item_data.img}`)" alt="">
    </div>
    <div v-if="data_type === 'info'" class="item-info info">
        <div class="info__title">{{ item_data.title }}</div>
        <div class="info__container">
            <div class="info__description">{{ item_data.description }}</div>
            <div class="btns">
                <VButton class="btns__button-arrow" style-type="btn-download" @click="$router.push('/shop')"></VButton>
                <VButton class="btns__button" style-type="btn-about" @click="$router.push('/shop')">Открыть магазин</VButton>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
export default {
    components: {VButton},
    props: {
        data_type: {
            type: String,
            required: true
        },
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped lang="scss">
.item-image {
    img {
        width: 45.625rem;
        height: 30.625rem;
    }
}
.info {
    letter-spacing: 0.02em;
    width: 35rem;

    &__title {
        font-weight: 500;
        line-height: 110%;
        font-size: 3.4375rem;
        margin-bottom: 2.8125rem;
    }
    &__description {
        text-align: right;
        font-size: 1.25rem;
        margin-bottom: 3.125rem;
    }
}
.info__container {
    width: 24rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.btns {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 590px) {
    .info {
        letter-spacing: 0.02em;
        width: 100%;

        &__title {
            font-size: 2rem;
        }
        &__description {
            text-align: left;
        }
    }
}
@media screen and (max-width: 480px) {
    .info {
        &__title {
            font-size: 1.5rem;
        }
        &__description {
            font-size: 1rem;
        }
    }
    .info__container {
        width: 100%;
        align-items: center;
    }
    .btns {
        &__button {
            padding: 0;
            width: 10rem;
            font-size: 0.9rem;
        }
    }
}
</style>