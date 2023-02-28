<template>
    <label :class="styleType">
        <span :class="styleType + '__title'">Добавить файл</span>
        <input :placeholder="placeholder" type="file" :value="modelValue" @input="updateInput">
    </label>
</template>

<script>
export default {
    props: {
        modelValue: [String, Number, Object],
        placeholder: {
            type: String
        },
        styleType: {
            type: String,
            required: true,
            default: () => 'input-text'
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
input[type=file] {
    display: none;
}

.input-file {
    width: 100%;
    height: 2rem;
    border: 2px solid #3e94d8;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        background: #a8d1f0;
    }

    &__title {
        display: flex;
        font-size: 1.2rem;
        text-align: center;

        &::before {
            margin-right: 0.3rem;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            display: block;
            content: '';
            background-image: url("../../../assets/icons/upload.png");
            background-size: 2rem;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>