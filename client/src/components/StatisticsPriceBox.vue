<template>
  <div class="box">
    <div class="box__icon">
      <icon-food></icon-food>
    </div>
    <div class="box__price">$230</div>
    <div class="box__text">food and restaurants</div>
  </div>
</template>

<script>
import IconFood from '@/components/IconFood'

export default {
  name: 'StatisticsPriceBox',
  components: {
    'icon-food': IconFood
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid white;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "icon price"
    "text text";
  &__icon {
    display: grid;
    grid-area: icon;
    justify-items: end;
  }
  &__price {
    grid-area: price;
    font-size: 18px;
    text-align: left;
  }
  &__text {
    color: rgb(155, 155, 155);
    font-size: 14px;
    grid-area: text;
    text-align: center;
  }
}
</style>
