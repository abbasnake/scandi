<template>
  <div class="view">
    <button-back class="view__button" @clicked="toHomepage"></button-back> <!-- not part of the grid layout -->
    <header-box class="view__header"></header-box>
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
import ButtonBack from '@/components/ButtonBack'
import StatisticsBalanceBox from '@/components/StatisticsBalanceBox'
import StatisticsPriceBox from '@/components/StatisticsPriceBox'
import StatisticsHeaderBox from '@/components/StatisticsHeaderBox'

export default {
  name: 'Statistics',
  components: {
    'button-back': ButtonBack,
    'balance-box': StatisticsBalanceBox,
    'price-box': StatisticsPriceBox,
    'header-box': StatisticsHeaderBox
  },
  methods: {
    toHomepage () {
      this.$router.push('/')
    }
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
  &__button {
    position: absolute;
    z-index: 1;
  }
  &__balance {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

div {
  // border: 1px solid red;
}
</style>
