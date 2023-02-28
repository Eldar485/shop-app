<template>
    <div :class="styleType">
        <textarea :placeholder="placeholder" :value="modelValue" @input="updateInput" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: [String, Number, Object],
        styleType: {
            type: String,
            required: true,
            default: () => 'input-text'
        },
        placeholder: {
            type: String
        },
    },
}
</script>

<style scoped lang="scss">
.textarea-message {
    textarea {
        border: none;
        border-bottom: 1px solid black;
        padding-bottom: 6.875rem;
        font-size: 1.06rem;
        width: 100%;

        &:focus, :active {
            outline: none;
            border-bottom: 1px solid black;
        }
    }

}
</style>