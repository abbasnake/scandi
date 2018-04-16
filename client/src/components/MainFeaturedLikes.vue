<template>
  <section class="likes">
    <span class="likes__profile"></span>
    <span class="likes__profile"></span>
    <span class="likes__count">+76</span>
    <span class="likes__text">Liked this</span>
  </section>
</template>

<script>
export default {
  name: 'MainFeaturedLikes'
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.likes {
  padding: 10px 0 20px 10px;
  &__profile {
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    height: 25px;
    margin-right: 5px;
    vertical-align: bottom;
    width: 25px;
  }
  &__count {
    background-color: $accent-purple;
    border-top-left-radius: 30% 45%;
    border-top-right-radius: 30% 45%;
    border-bottom-left-radius:30% 45%;
    border-bottom-right-radius: 30% 45%;
    display: inline-block;
    font-size: 14px;
    height: 25px;
    margin-right: 5px;
    padding: 3px 6px 3px 6px;
    width: min-content;
  }
  &__text {
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
