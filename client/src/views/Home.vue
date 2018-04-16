<template>
  <div>
    <button-back></button-back>
    <div>TITLE</div>
    <div>SUBTITLE</div>
    <hr>
    <div>AUTHOR - DATE</div>
    <div>LIKES</div>
    <nav>NAVBAR</nav>
  </div>
</template>

<script>
import ButtonBack from '@/components/ButtonBack'

export default {
  name: 'Home',
  components: {
    'button-back': ButtonBack
  }
}
</script>

<style lang="scss" scoped>
h1 {
  background-color: pink;
}
</style>
