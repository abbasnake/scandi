<template>
  <nav class="navbar">
    <ul class="navbar__items">
      <li-month @clicked="onClick($event)">January</li-month>
      <li-month @clicked="onClick($event)">February</li-month>
      <li-month @clicked="onClick($event)">March</li-month>
      <li-month @clicked="onClick($event)">April</li-month>
      <li-month @clicked="onClick($event)">May</li-month>
      <li-month @clicked="onClick($event)">June</li-month>
      <li-month @clicked="onClick($event)">July</li-month>
      <li-month @clicked="onClick($event)">August</li-month>
      <li-month @clicked="onClick($event)">September</li-month>
      <li-month @clicked="onClick($event)">October</li-month>
      <li-month @clicked="onClick($event)">November</li-month>
      <li-month @clicked="onClick($event)">December</li-month>
    </ul>
  </nav>
</template>

<script>
import LiMonth from '@/components/LiMonth'

export default {
  name: 'NavbarMonths',
  components: {
    'li-month': LiMonth
  },
  methods: {
    onClick (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.navbar {
  background-color: $secondary-dark;
  display: grid;
  overflow: hidden;
  width: 100%;
  &__items {
    display: grid;
    grid-template-columns: repeat(12, 100px);
    overflow-x: scroll;
    overflow-y: hidden;
    height: 130%; // to hide the scrollbar
  }
}
</style>
