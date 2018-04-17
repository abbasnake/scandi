<template>
  <div class="view">
    <div class="view__title">BACK BUTTON - PAGE TILE</div>
    <div class="view__months">MONTH NAV</div>
    <div class="view__main">BALANCE CIRCLE</div>
    <div class="view__price">FOOD AND RESTAURANT</div>
    <div class="view__balance">
      <balance-box></balance-box>
      <balance-box></balance-box>
    </div>
  </div>
</template>

<script>
import StatisticsBalanceBox from '@/components/StatisticsBalanceBox'
export default {
  name: 'Statistics',
  components: {
    'balance-box': StatisticsBalanceBox
  }
}
</script>

<style lang="scss" scoped>
.view {
  border: 1px solid white;
  display: grid;
  grid-template-rows: 2fr 2fr 60% 2fr 3fr;
  height: 669px;
  margin: 0 auto;
  width: 376px;
  &__balance {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

div {
  // border: 1px solid red;
}
</style>
