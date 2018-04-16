<template>
  <nav class="navbar">
    <button-default>
      <icon-profile></icon-profile>
    </button-default>
    <button-default>
      <icon-statistics></icon-statistics>
    </button-default>
    <button-default>
      <icon-notifications></icon-notifications>
    </button-default>
    <button-default>
      <icon-flag></icon-flag>
    </button-default>
    <button-default>
      <icon-home></icon-home>
    </button-default>
  </nav>
</template>

<script>
import Button from '@/components/Button'
import IconProfile from '@/components/IconProfile'
import IconStatistics from '@/components/IconStatistics'
import IconNotifications from '@/components/IconNotifications'
import IconFlag from '@/components/IconFlag'
import IconHome from '@/components/IconHome'

export default {
  name: 'Navbar',
  components: {
    'button-default': Button,
    'icon-profile': IconProfile,
    'icon-statistics': IconStatistics,
    'icon-notifications': IconNotifications,
    'icon-flag': IconFlag,
    'icon-home': IconHome
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  // border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 53px;
}
</style>
