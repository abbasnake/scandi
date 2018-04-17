<template>
  <div class="box">
    <div class="box__border">
      <div class="box__border__dollars">+$1400</div>
      <div class="box__border__cents">99</div>
      <div class="box__border__icon">
        <icon-increase></icon-increase>
      </div>
    </div>
  </div>
</template>

<script>
import IconIncrease from '@/components/IconIncrease'

export default {
  name: 'StatisticsBalanceBox',
  components: {
    'icon-increase': IconIncrease
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

  .box {
    border: 1px solid blue;
    height: 100%;
    padding: 10px;
    &__border {
      border: 1px solid $accent-blue;
      border-radius: 5px;
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        "dollars cents"
        "dollars icon";
      height: 100%;
      &__dollars {
        align-self: center;
        font-size: 28px;
        grid-area: dollars;
        justify-self: end;
      }
      &__cents {
        align-self: end;
        grid-area: cents;
      }
      &__icon {
        align-self: start;
        grid-area: icon;
        padding-bottom: 5px;
      }
    }
  }
</style>
