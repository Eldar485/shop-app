<template>
    <div class="team">
        <v-carousel data_type="image" class="team__carousel" :carousel_data="slide"></v-carousel>
        <div class="team__info info">
            <div class="info__title">Для каждой</div>
            <div class="info__description">
                <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
            </div>
            <div class="info__detail">Подробнее о бренде</div>
        </div>
    </div>
</template>

<script>
import VCarousel from "@/core/components/carousel/v-Carousel";
export default {
    components: {VCarousel},
    data() {
        return {
            slide: [
                { id: 1, name: 'img1', img: '1.jpg' },
                { id: 2, name: 'img2', img: '2.jpg' },
                { id: 3, name: 'img3', img: 'product-item_2.jpg' },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.team {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 140%;
    letter-spacing: 0.02em;

    .info {
        width: 16rem;
        font-size: 17px;
        font-weight: 500;

        &__title {
            font-size: 1.5625rem;
            margin-bottom: 1.875rem;
        }
        &__description {
            & p:first-child {
                margin-bottom: 1.5rem;
            }
            margin-bottom: 1.875rem;
        }
        &__detail {
            color: #6E9C9F;

        }
    }
}

@media screen and (max-width: 1100px) {
    .team {
        flex-direction: column;

        .info {
            margin-top: 2rem;
        }
    }
}

@media screen and (max-width: 840px) {
    .team {
        &__carousel {
            display: none;
        }
    }
}
</style>