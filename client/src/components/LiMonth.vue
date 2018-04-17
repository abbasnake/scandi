<template>
  <li class="item" @click="onClick($event)">
    <div class="item__container">
      <slot></slot>
    </div>
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
  &__container {
    color: inherit;
    display: grid;
    justify-items: center;
    top: 18px;
  }
}
</style>
