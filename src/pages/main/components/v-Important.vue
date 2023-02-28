<template>
    <div class="important">
        <div class="important__items">
            <div class="item">
                <div class="item__image quality"></div>
                <div class="item__title">Качество</div>
                <div class="item__description">
                    Наши профессионалы работают на лучшем оборудовании
                    для пошива одежды беспрецедентного качества
                </div>
            </div>
            <div class="item">
                <div class="item__image speed"></div>
                <div class="item__title">Скорость</div>
                <div class="item__description">
                    Благодаря отлаженной системе в Womazing мы можем
                    отшивать до 20-ти единиц продукции в наших собственных цехах
                </div>
            </div>
            <div class="item">
                <div class="item__image responsibility"></div>
                <div class="item__title">Ответственность</div>
                <div class="item__description">
                    Мы заботимся о людях и планете. Безотходное производство
                    и комфортные условия труда - все это Womazing
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.important {
    &__items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8.75rem;
    }
    .item {
        max-width: 20rem;

        &__image {
            max-width: 3.75rem;
            max-height: 3.75rem;
            width: 100%;
            height: 100%;
        }
        &__title {
            font-weight: 500;
            font-size: 1.5625rem;
            margin: 2.3125rem 0 1.5rem 0;
        }
        &__description {
            font-size: 1rem;
        }
        .quality {
            background: url("../../../assets/icons/Quality.svg");
        }
        .speed {
            background: url("../../../assets/icons/Speed.svg") center;
        }
        .responsibility {
            background: url("../../../assets/icons/Responsibility.svg");
        }
    }
}
@media screen and (max-width: 1110px) {
    .important {
        &__title {
            font-size: 2rem;
        }
        &__items {
            flex-direction: column;
            margin: 0 auto;
            align-items: center;
        }
        .item {
            margin-bottom: 3rem;
            max-width: 80%;

            &__image {
                height: 3.8rem;
            }
        }
    }
}
</style>