<template>
    <v-main-title class="main-title" title="О бренде" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div class="about">
        <div class="about__top top">
            <div class="top__image">
                <img src="../assets/images/2.jpg" alt="2">
            </div>
            <div class="top__text">
                <div class="top__title">Идея и женщина</div>
                <div class="top__describe">
                    <p>
                        Womazing была основана в 2010-ом и стала одной из
                        самых успешных компаний нашей страны. Как и многие
                        итальянские фирмы, Womazing остаётся семейной компанией,
                        хотя ни один из членов семьи не является модельером.
                    </p>
                    <p>
                        Мы действуем по успешной формуле, прибегая к услугам
                        известных модельеров для создания своих коллекций.
                        Этот метод был описан критиком моды Колином Макдауэллом как
                        форма дизайнерского со-творчества, характерная для ряда итальянских
                        prêt-a-porter компаний.
                    </p>
                </div>
            </div>
        </div>
        <div class="about__bottom bottom">
            <div class="bottom__text">
                <div class="bottom__title">Магия в деталях</div>
                <div class="bottom__describe">
                    <p>
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году.
                        Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
                    </p>
                    <p>
                        Несмотря на то, что по образованию основательница была адвокатом,
                        ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду
                        для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду
                        для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала,
                        а рынка качественного prêt-a-porter попросту не существовало.
                    </p>
                </div>
            </div>
            <div class="bottom__image">
                <img src="../assets/images/1.jpg" alt="1">
            </div>
        </div>
        <div class="btn">
            <v-button style-type="btn-about" @click="$router.push('/shop')">Перейти в магазин</v-button>
        </div>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VMainTitle from "@/core/components/UI/v-Main-title";
export default {
    components: {VMainTitle, VButton},
}
</script>

<style scoped lang="scss">
.about {
    display: flex;
    flex-direction: column;
    font-weight: 500;

    & > * {
        display: flex;
        align-items: center;
    }
}

.main-title {
    margin: 12.5rem 0;
}

.top {
    display: flex;
    margin-bottom: 7.2rem;

    &__image image{
        height: 36.5rem;
    }
    &__text {
        font-size: 1.2rem;
        margin-left: 8rem;
        max-width: 27rem;
    }
    &__title {
        font-size: 1.6rem;
        margin-bottom: 3rem;
    }
    &__describe p:nth-child(2) {
        margin-top: 1.5rem;
    }
}

.bottom {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10.1rem;

    &__image image{
        height: 36.5rem;
    }
    &__text {
        font-size: 1.2rem;
        margin-right: 8rem;
        max-width: 27rem;
    }
    &__title {
        font-size: 1.6rem;
        margin-bottom: 3rem;
    }
    &__describe p:nth-child(2) {
        margin-top: 1.5rem;
    }
}

.btn {
    margin: 0 auto 8.6rem auto;
}

@media screen and (max-width: 850px) {
    .top {
        flex-direction: column;

        &__image {
            order: 1;
            & img {
                width: 100%;
            }
        }

        &__text {
            margin-bottom: 3rem;
            margin-left: 0;
            font-size: 1rem;
        }
    }
    .bottom {
        flex-direction: column;
        margin-bottom: 3rem;

        &__image {
            order: 0;
            & img {
                width: 100%;
            }
        }

        &__text {
            margin-bottom: 3rem;
            margin-right: 0;
            font-size: 1rem;
        }
    }

    .btn {
        margin: 0 auto 3.6rem auto;
    }
}
</style>