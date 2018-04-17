<template>
  <li class="item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'LiMonth'
}
</script>

<style lang="scss" scoped>
.item {
  color: rgb(155, 155, 155);
  &:hover {
    color: #ffffff;
  }
}
</style>
