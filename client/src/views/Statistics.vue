<template>
  <div class="view">
    <div class="view__title">BACK BUTTON - PAGE TILE</div>
    <div class="view__months">MONTH NAV</div>
    <div class="view__main">BALANCE CIRCLE</div>
    <price-box></price-box>
    <div class="view__balance">
      <balance-box type="increase">+$1400</balance-box> <!-- maybe scoped slots -->
      <balance-box type="decrease">-$980</balance-box>
    </div>
  </div>
</template>

<script>
import StatisticsBalanceBox from '@/components/StatisticsBalanceBox'
import StatisticsPriceBox from '@/components/StatisticsPriceBox'

export default {
  name: 'Statistics',
  components: {
    'balance-box': StatisticsBalanceBox,
    'price-box': StatisticsPriceBox
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
