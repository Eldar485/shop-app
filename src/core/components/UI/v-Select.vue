<template>
    <div :class="[areOptionsVisible ? styleType + '-active' : styleType]">
        <div v-click-outside="() => {this.areOptionsVisible = false}" :class="[areOptionsVisible ? styleType + '-active__title' : styleType + '__title']"
           @click="areOptionsVisible = !areOptionsVisible">{{ selectedOption?.name || options[0]?.name }}
            <div class="triangle" :class="{'active': areOptionsVisible}"></div>
        </div>
        <transition name="options">
            <div :class="[areOptionsVisible ? styleType + '-active__options' : styleType + '__options']" v-if="areOptionsVisible">
                <p v-for="option in options" :key="option.value" @click="changeOption(option)">{{ option.name }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'v-select',
    data() {
        return {
            areOptionsVisible: false,
        }
    },
    props: {
        options: {
            type: Array,
            default: () => [],
            required: true
        },
        selectedOption: {
            type: null,
            default: () => this.options[0]
        },
        styleType: {
            type: String,
            required: true,
            default: () => 'select'
        }
    },
    methods: {
        changeOption(option) {
            this.$emit('selectOption', option);
            this.areOptionsVisible = !this.areOptionsVisible;
        }
    }
}
</script>

<style scoped lang="scss">
.select {
    position: relative;
    cursor: pointer;
    background: #cde4f5;
    border-radius: 20px;
    font-size: 1.6rem;

    &__title {
        height: 2rem;
        padding: 10px 10px 10px 30px;
        transition: .3s ease;

        &:hover {
            border-radius: 20px;
            background: #a8d1f0;
        }
    }
}
.select-active {
    position: relative;
    cursor: pointer;
    font-size: 1.6rem;
    background: #ffffff;
    border-radius: 5px 5px 0 0;
    border: 1px solid #3e94d8;
    border-bottom: none;
    transition: .5s ease;

    &__title {
        height: 2rem;
        padding: 10px 10px 10px 30px;
        color: #499bd8;
    }

    &__options {
        border: 1px solid #3e94d8;
        border-radius: 0 0 5px 5px;
        position: absolute;
        top: 3.3rem;
        left: -1px;
        width: 100%;
        border-top: none;
        background: #ffffff;
        z-index: 3;

        p {
            border-top: 1px solid black;
            border-top: 1px solid #d9d9d9;
            height: 2rem;
            padding: 10px 10px 10px 30px;
            transition: 0.5s ease;

            &:hover {
                color: #499bd8;
            }
        }
    }
}

.triangle {
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #3694d7;
    transition: .8s ease;
}

.triangle.active {
    transform: rotate(-180deg);
}

.options-enter-active,
.options-leave-active {
    transition: all 0.5s ease;
}

.options-enter-from,
.options-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>