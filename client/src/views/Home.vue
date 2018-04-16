<template>
  <div class="view">
    <button-back>
      <icon-arrow></icon-arrow>
    </button-back>
    <div>TITLE</div>
    <div>SUBTITLE</div>
    <hr>
    <div>AUTHOR - DATE</div>
    <div>LIKES</div>
    <nav-bar></nav-bar>
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
  height: 669px;
  margin: 0 auto;
  width: 376px;
}
</style>
