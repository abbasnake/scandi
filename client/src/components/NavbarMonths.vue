<template>
  <nav class="navbar">
    <ul class="navbar__items">
      <li-month>January</li-month>
      <li-month>February</li-month>
      <li-month>March</li-month>
      <li-month>April</li-month>
      <li-month>May</li-month>
      <li-month>June</li-month>
      <li-month>July</li-month>
      <li-month>August</li-month>
      <li-month>September</li-month>
      <li-month>October</li-month>
      <li-month>November</li-month>
      <li-month>December</li-month>
    </ul>
  </nav>
</template>

<script>
import LiMonth from '@/components/LiMonth'

export default {
  name: 'NavbarMonths',
  components: {
    'li-month': LiMonth
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  border: 1px solid blue;
  display: grid;
  overflow: hidden;
  width: 100%;
  &__items {
    border: 1px solid red;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(12, 1fr);
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>
