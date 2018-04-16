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
      console.log('ButtonBack has been clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: rgba(100, 100, 100, 0.2);
    border: none;
    border-radius: 50%;
    height: 45px;
    margin: 10px;
    padding: 10px;
    width: 45px;
    &:hover > svg{
      fill: #ffffff;
    }
  }
</style>
