<template>
  <section class="info">
    <span class="info__by">By</span>
    <span class="info__author">Nicholas O`Brian</span>
    <span class="info__date">28 July</span>
  </section>
</template>

<script>
export default {
  name: 'MainFeaturedDefault'
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.info {
  display: grid;
  grid-template-columns: 23px auto 60px;
  padding: 12px;
  &__by {
    font-family: $font-heebo;
    font-weight: 300;
  }
}
</style>
