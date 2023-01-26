<template>
  <input :class="styleType" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: 'v-input',
  props: {
    modelValue: [String, Number],
    styleType: {
      type: String,
      required: true
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>