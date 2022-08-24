<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(117.42deg, rgba(30, 33, 45, 0.75) 0%, rgba(33, 39, 61, 0.75) 0.01%, rgba(29, 32, 46, 0.75) 91.49%);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: #29324F;
  border-radius: 10px;
  min-width: 463px;
  min-height: 302px;
  padding: 36px;
}
</style>