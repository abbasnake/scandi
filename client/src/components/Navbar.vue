<template>
  <nav class="navbar">
    <button-default>I1</button-default>
    <button-default>I2</button-default>
    <button-default>I3</button-default>
    <button-default>I4</button-default>
    <button-default>I5</button-default>
  </nav>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Navbar',
  components: {
    'button-default': Button
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 53px;
}
</style>
