<template>
    <v-main-title class="main-title" title="Заказ получен" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div class="order-success">
        <div class="order-success__info">
            <div class="order-success__icon"></div>
            <div class="order-success__text text">
                <div class="text__title">Заказ успешно оформлен</div>
                <div class="text__describe">Мы свяжемся с вами в ближайшее время!</div>
            </div>
        </div>
        <VButton class="order-success__button" style-type="btn-success" @click="$router.push('/')">Перейти на главную</VButton>
    </div>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VMainTitle from "@/core/components/UI/v-Main-title";
export default {
    components: {VMainTitle, VButton}
}
</script>

<style scoped lang="scss">
.order-success {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8.5rem;

    &__info {
        display: flex;
        width: 30rem;
        justify-content: space-between;
    }
    &__icon {
        width: 4.55rem;
        height: 5.3rem;
        background: url("../assets/icons/success-order.svg");
    }
}

.main-title {
    margin: 12.5rem 0;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
        margin-top: 0.2rem;
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 500;
    }
    &__describe {
        margin-bottom: 0.3rem;
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 780px) {
    .order-success {
        flex-direction: column;

        &__button {
            margin: 5rem 0;
        }
        &__icon {
            display: none;
        }
        &__info {
            justify-content: center;
            text-align: center;
            width: 100%;
        }
    }
    .text {
        &__title {
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        &__describe {
            font-size: 1rem;
        }
    }
}
</style>