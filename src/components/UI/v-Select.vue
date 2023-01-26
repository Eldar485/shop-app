<template>
  <select :class="styleType" :value="modelValue" @change="changeOption">
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'v-select',
  props: {
    modelValue:{
      type: String
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    styleType: {
      type: String,
      required: true
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>