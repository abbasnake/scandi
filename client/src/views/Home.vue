<template>
  <div class="view">
    <button-back class="view__back-button">
      <icon-arrow></icon-arrow>
    </button-back>
    <div class="view__featured">TITLE SUBTITLE by somebody date likes</div>
    <nav-bar class="view__navbar"></nav-bar>
  </div>
</template>

<script>
import IconArrow from '@/components/IconArrow'
import ButtonBack from '@/components/ButtonBack'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    'icon-arrow': IconArrow,
    'button-back': ButtonBack,
    'nav-bar': Navbar
  }
}
</script>

<style lang="scss" scoped>
.view {
  background: url('../assets/image-standing.png') no-repeat;
  border: 1px solid white;
  display: grid;
  grid-template-areas: 
    "back-button ."
    ". ."
    "featured featured"
    "navbar navbar";
  grid-template-rows: 65px 1fr 2fr 53px;
  height: 669px;
  margin: 0 auto;
  width: 376px;
  &__back-button {
    grid-area: back-button;
  }
  &__featured {
    grid-area: featured;
  }
  &__navbar {
    grid-area: navbar
  }
}
</style>
