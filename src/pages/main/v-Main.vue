<template>
  <div class="main">
      <div class="preview">
          <v-carousel data_type="info" :carousel_data="slide"></v-carousel>
      </div>
      <v-preview class="preview__image"></v-preview>
      <div class="title">Новая коллекция</div>
      <new-collection></new-collection>
      <VButton class="main__button" style-type="btn-success" @click="$router.push('/shop')">Открыть магазин</VButton>
      <div class="title">Что для нас важно</div>
      <v-important></v-important>
      <div class="title">Команда мечты Womazing</div>
      <v-team class="team"></v-team>
  </div>
</template>

<script>

import NewCollection from "@/pages/main/components/v-New-collection";
import VButton from "@/core/components/UI/v-Button";
import VImportant from "@/pages/main/components/v-Important";
import VTeam from "@/pages/main/components/v-Team";
import VCarousel from "@/core/components/carousel/v-Carousel";
import {useI18n} from "vue-i18n";
import VPreview from "@/pages/main/components/v-Preview";
export default {
    components: {VPreview, VCarousel, VTeam, VImportant, VButton, NewCollection},
    setup() {
        const { t } = useI18n({useScope: 'global'})
        return { t }
    },
    data() {
        return {
            slide: [
                { id: 1, title: 'Новые поступления в этом сезоне', description: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.' },
                { id: 2, title: 'Что-то новенькое. Мы заждались тебя.', description: 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!' },
                { id: 3, title: 'Включай новый сезон с WOMAZING', description: 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров' },
            ]
        }
    },
}
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;

    .preview {
        margin-top: 9rem;
        margin-bottom: 20rem;
    }
    .title {
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 4.2rem;
    }
    &__button {
        margin: 4rem 0 8.125rem 0;
        align-self: center;
    }
    .team {
        margin-bottom: 8.125rem;
    }
}
@media screen and (max-width: 580px) {
    .main {
        .title {
            font-weight: 500;
            font-size: 1.5rem;
            margin-bottom: 4.2rem;
        }
    }
}
@media screen and (max-width: 1270px) {
    .main {
        .preview__image {
            display: none;
        }
    }
}
</style>