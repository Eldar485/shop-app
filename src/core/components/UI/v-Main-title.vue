<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="breadcrumbs" v-if="!product">
            <div class="breadcrumb" v-for="(cramb, index) in breadcrumb" :key="cramb.label" @click="$router.push(`${cramb.link}`)">
                <div class="breadcrumb__value">{{ cramb.label }}</div>
                <div v-if="index !== breadcrumb.length - 1" class="breadcrumb__dash">&#8212;</div>
            </div>
        </div>
        <div class="breadcrumbs" v-if="product">
            <div class="breadcrumb" v-for="(cramb, index) in breadcrumb" :key="cramb.label" @click="$router.push(`${cramb.link}`)">
                <div class="breadcrumb__value">{{ cramb.label }}</div>
                <div v-if="index !== breadcrumb.length - 1" class="breadcrumb__dash">&#8212;</div>
            </div>
            <div class="breadcrumb">
                <div class="breadcrumb__dash">&#8212;</div>
                <div class="breadcrumb__value">{{ title }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
          breadcrumbs: []
      }
    },
    props: {
        title: {
            type: String
        },
        breadcrumb: {
            type: Array
        },
        product: {
            type: Boolean,
        }
    }
}
</script>

<style scoped lang="scss">
.title {
    font-weight: 500;
    font-size: 55px;
    margin-bottom: 2.7rem;
}

.product {
    color: #909090;
    margin-right: -1.8125rem;
}

.breadcrumbs {
    font-weight: 500;
    font-size: 17px;
    display: flex;

    .breadcrumb {
        display: flex;

        &__value {
            cursor: pointer;
        }
        & > * {
            margin-right: 0.8125rem;
        }
        &:last-child {
            color: #909090;
        }
    }
}

@media screen and (max-width: 500px) {
    .title {
        font-size: 30px;
    }
    .breadcrumbs {
        font-size: 14px;
    }
}
</style>