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
    <nav>NAVBAR</nav>
  </div>
</template>

<script>
import IconArrow from '@/components/IconArrow'
import ButtonBack from '@/components/ButtonBack'

export default {
  name: 'Home',
  components: {
    'icon-arrow': IconArrow,
    'button-back': ButtonBack
  }
}
</script>

<style lang="scss" scoped>
.view {
  background:
    url('../assets/image-standing.png')
    no-repeat;
  border: 1px solid white;
  display: grid;
  height: 669px;
  margin: 0 auto;
  width: 376px;
}
</style>
