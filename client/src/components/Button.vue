<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

  .button {
    background-color: $main-dark;
    border: none;
    outline: none;
    &:hover > svg{
      fill: #ffffff;
    }
  }
</style>
