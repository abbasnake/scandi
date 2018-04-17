<template>
  <main class="main">
    <section class="main__title">Who are you and why you're standing here?</section>
    <section class="main__subtitle">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</section>
    <main-featured-info class="main__info"></main-featured-info>
    <main-featured-likes class="main__likes"></main-featured-likes>
  </main>
</template>

<script>
import MainFeaturedLikes from '@/components/MainFeaturedLikes'
import MainFeaturedInfo from '@/components/MainFeaturedInfo'

export default {
  name: 'MainFeatured',
  components: {
    'main-featured-likes': MainFeaturedLikes,
    'main-featured-info': MainFeaturedInfo
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.main {
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
}
</style>
