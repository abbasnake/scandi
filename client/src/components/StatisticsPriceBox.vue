<template>
  <div class="box">
    <div class="box__price">
      <icon-food class="box__price__icon"></icon-food>
      $230
    </div>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "price"
    "text";
  justify-items: center;
  &__price {
    grid-area: price;
    font-size: 18px;
    text-align: left;
    &__icon {
    }
  }
  &__text {
    color: rgb(155, 155, 155);
    font-size: 14px;
    grid-area: text;
  }
}
</style>
