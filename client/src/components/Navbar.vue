<template>
  <nav class="navbar">
    <button-default>
      <icon-profile></icon-profile>
    </button-default>
    <button-default>
      <icon-statistics></icon-statistics>
    </button-default>
    <button-default>I3</button-default>
    <button-default>I4</button-default>
    <button-default>I5</button-default>
  </nav>
</template>

<script>
import Button from '@/components/Button'
import IconProfile from '@/components/IconProfile'
import IconStatistics from '@/components/IconStatistics'

export default {
  name: 'Navbar',
  components: {
    'button-default': Button,
    'icon-profile': IconProfile,
    'icon-statistics': IconStatistics
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
