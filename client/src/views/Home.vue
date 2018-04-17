<template>
  <div class="view">
    <button-back class="view__button"></button-back>
    <main-featured class="view__main"></main-featured>
    <nav-bar class="view__navbar"></nav-bar>
  </div>
</template>

<script>
import ButtonBack from '@/components/ButtonBack'
import MainFeatured from '@/components/MainFeatured'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    'button-back': ButtonBack,
    'main-featured': MainFeatured,
    'nav-bar': Navbar
  }
}
</script>

<style lang="scss" scoped>
.view {
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url('../assets/image-standing.png');
  background-repeat: no-repeat;
  border: 1px solid grey;
  display: grid;
  grid-template-areas:
    "button"
    "."
    "main"
    "navbar";
  grid-template-rows: 65px auto 370px 53px;
  height: 669px;
  margin: 0 auto;
  width: 376px;
  &__button {
    grid-area: button;
  }
  &__main {
    grid-area: main;
  }
  &__navbar {
    grid-area: navbar
  }
}
</style>
