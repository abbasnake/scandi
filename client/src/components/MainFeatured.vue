<template>
  <main class="main">
    <section class="main__title">
      Who are you and why you're standing here?
    </section>
    <section class="main__subtitle">
      It doesn't matter if you're building the next Facebook,
      or if you're the director of marketing for an industrial company.
    </section>
    <hr class="main__line">
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
  grid-template-rows: 4fr 3fr 1px 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
  &__title {
    font-size: 40px;
    font-weight: 300;
    padding-right: 20px;
  }
  &__subtitle {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    padding: 0 20px 0 0;
  }
  &__line {
    border: 0;
    border-top: 1px solid rgba(100, 100, 100, 0.5);
    position: relative;
    bottom: 10px;
  }
}
</style>
