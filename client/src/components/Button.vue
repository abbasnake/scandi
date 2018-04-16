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
      console.log('Button has been clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: rgba(100, 100, 100, 0.2);
    padding: 10px;
    outline: none;
    &:hover > svg{
      fill: #ffffff;
    }
  }
</style>
