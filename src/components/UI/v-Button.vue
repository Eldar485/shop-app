<template>
  <button :class="styleType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    styleType: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>