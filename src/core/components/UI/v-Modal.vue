<template>
    <div :class="styleType" v-if="show" @click="hideDialog">
        <div @click.stop :class="styleType + '__content'">
            <div class="exit" @click="hideDialog">+</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/core/mixins/toggleMixin";

export default {
    name: 'v-modal',
    mixins: [toggleMixin],
    props: {
        styleType: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.dialog {
    overflow-y:scroll;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(118, 162, 164, 0.95);
    position: fixed;
    display: flex;
    z-index: 1;

    &__content {
        position: relative;
        margin: auto;
        background: white;
        border-radius: 12px;
        padding: 70px;
    }
}

.exit {
    position: absolute;
    font-size: 2rem;
    right: 1.7rem;
    top: 1.2rem;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    cursor: pointer;
}
</style>