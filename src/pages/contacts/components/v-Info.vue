<template>
    <div class="contacts">
        <div class="contacts__phone">
            <div class="contacts__title">Телефон</div>
            <div class="contacts__value">+7 (495) 823-54-12</div>
        </div>
        <div class="contacts__email">
            <div class="contacts__title">E-mail</div>
            <div class="contacts__value">info@sitename.com</div>
        </div>
        <div class="contacts__address">
            <div class="contacts__title">Адрес</div>
            <div class="contacts__value">г. Москва, 3-я улица Строителей, 25</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.contacts {
    font-weight: 500;
    display: flex;
    margin-bottom: 8.6rem;
    max-width: 62.8rem;
    justify-content: space-between;

    &__title {
        font-size: 1.1rem;
    }
    &__value {
        margin-top: 1.25rem;
        font-size: 1.3rem;
    }
}

@media screen and (max-width: 690px) {
    .contacts {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;

        & > * {
            margin-bottom: 3rem;
        }

        &__value {
            margin-top: 0.5rem;
        }
    }
}
</style>