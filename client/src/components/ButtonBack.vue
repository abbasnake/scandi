<template>
  <button class="button" @click="onClick">
    <icon-arrow></icon-arrow>
  </button>
</template>

<script>
import IconArrow from '@/components/IconArrow'

export default {
  name: 'ButtonBack',
  components: {
    'icon-arrow': IconArrow
  },
  methods: {
    onClick () {
      this.$emit('clicked')
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
    &:focus {
      outline: none;
    }
    &:hover > svg{
      fill: #ffffff;
    }
  }
</style>
