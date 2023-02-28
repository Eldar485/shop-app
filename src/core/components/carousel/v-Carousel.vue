<template>
    <div class="slideshow-container">
        <div class="mySlides fade">
            <v-carousel-item :data_type="data_type" :item_data="carousel_data[slideIndex]"></v-carousel-item>
            <a v-if="data_type === 'image'" class="prev" @click="prevSlide()"></a>
            <a v-if="data_type === 'image'" class="next" @click="nextSlide()"></a>
            <div :class="[{'dots-image': data_type === 'image'}, {'dots-info': data_type === 'info'}]">
                <span class="dot" :class="{'active': index === slideIndex}" v-for="(item, index) in carousel_data" :key="item.id" @click="currentSlide(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import VCarouselItem from "@/core/components/carousel/v-Carousel-item";
export default {
    components: {VCarouselItem},
    data() {
      return {
          slideIndex: 0
      }
    },
    props: {
        data_type: {
            type: String,
            required: true
        },
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        prevSlide() {
            if (this.slideIndex < 1) {
                this.slideIndex = this.carousel_data.length - 1;
                return;
            }
            this.slideIndex--;
        },
        nextSlide() {
            if (this.slideIndex >= this.carousel_data.length - 1) {
                this.slideIndex = 0;
                return;
            }
            this.slideIndex++;
        },
        currentSlide(slide) {
            this.slideIndex = slide;
        },

    }
}
</script>

<style scoped lang="scss">
.slideshow-container {
    max-width: 45.625rem;
    position: relative;

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: black;
        font-weight: bold;
        font-size: 18px;
        border-radius: 0 3px 3px 0;
    }
    .next {
        right: -4rem;
        border-radius: 3px 0 0 3px;
        transform: scale(-1, 1);
        background: url("../../../assets/icons/arrow.svg") no-repeat center;

        &:hover {
            transform: scale(1, -1);
            background: url("../../../assets/icons/arrow-active.svg") no-repeat center;
        }
    }
    .prev {
        left: -4rem;
        background: url("../../../assets/icons/arrow.svg") no-repeat center;

        &:hover {
            transform: scale(-1, 1);
            background: url("../../../assets/icons/arrow-active.svg") no-repeat center;
        }
    }
    .dots-image {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: 3.75rem;

        .dot {
            cursor: pointer;
            height: 4px;
            width: 30px;
            margin: 0 0.35rem;
            background: rgba(255, 255, 255, 0.36);
            transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
            background-color: #FFFFFF;
        }
    }
    .dots-info {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: -8rem;

        .dot {
            cursor: pointer;
            height: 4px;
            width: 30px;
            margin: 0 0.35rem;
            background: #D1D1D1;
            transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
            background-color: #000000;
        }
    }

    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }
    @-webkit-keyframes fade {
        from{opacity: 4}
        to{opacity: 1}
    }
    @keyframes fade {
        from{opacity: 4}
        to{opacity: 1}
    }
}
</style>