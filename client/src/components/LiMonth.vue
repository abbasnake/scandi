<template>
  <li class="item" @click="onClick($event)">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'LiMonth',
  methods: {
    onClick (e) {
      this.$emit('clicked', e.target.textContent)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  color: rgb(155, 155, 155);
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
}
</style>
