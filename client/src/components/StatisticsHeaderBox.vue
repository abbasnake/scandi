<template>
  <header class="header">
    Statistic
    <icon-statistics class="header__icon" fill="#ffffff"></icon-statistics>
  </header>
</template>

<script>
import IconStatistics from '@/components/IconStatistics'

export default {
  name: 'StatisticsHeaderBox',
  components: {
    'icon-statistics': IconStatistics
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 18px;
  text-align: center;
  margin: auto;
  &__icon {
    fill: white;
    left: 10px;
  }
}
</style>
