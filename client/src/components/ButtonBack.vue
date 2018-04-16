<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBack',
  methods: {
    onClick () {
      console.log('I have been clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: rgba(100, 100, 100, 0.5);
    border: none;
    border-radius: 50%;
    height: 45px;
    margin: 10px;
    padding: 10px;
    width: 45px;
    &:hover {
      fill: #ffffff;
    }
  }
</style>
