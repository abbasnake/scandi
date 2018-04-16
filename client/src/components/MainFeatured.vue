<template>
  <main class="main">
    <section class="main__title">Who are you and why you're standing here?</section>
    <section class="main__subtitle">It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</section>
    <section class="main__info">By Nicholas O`Brian 28 july</section>
    <section class="main__likes">PP PP +76 Liked this</section>
  </main>
</template>

<script>
export default {
  name: 'MainFeatured'
}
</script>

<style lang="scss" scoped>
.main {
  border: 1px solid white;
  display: grid;
  grid-template-rows: 2fr 2fr 1fr 1fr;
}
</style>
