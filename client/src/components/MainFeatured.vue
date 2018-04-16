<template>
  <main class="main">
    <section class="main__title">Who are you and why you're standing here?</section>
    <section class="main__subtitle">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</section>
    <section class="main__info">
      <span class="main__info__by">By</span>
      Nicholas O`Brian 28 july
    </section>
    <main-featured-likes class="main__likes"></main-featured-likes>
  </main>
</template>

<script>
import MainFeaturedLikes from '@/components/MainFeaturedLikes'
export default {
  name: 'MainFeatured',
  components: {
    'main-featured-likes': MainFeaturedLikes
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.main {
  // border: 1px solid white;
  display: grid;
  grid-template-rows: 4fr 4fr 1fr 1fr;
  &__title {
    font-size: 40px;
    font-weight: 300;
    padding: 10px;
    padding-right: 40px;
  }
  &__subtitle {
    font-size: 18px;
    font-weight: 300;
    padding: 5px 40px 10px 10px;
  }
  &__info {
    padding: 10px;
    &__by {
      font-family: $font-heebo;
      font-weight: 300;
    }
  }
}
</style>
