<template>
  <div :class="styleType" v-if="show" @click="hideDialog">
    <div @click.stop :class="styleType + '__content'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

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
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 300px;
    padding: 20px;
  }
}
</style>