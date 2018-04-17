<template>
  <div class="box">
    <icon-ellipse class="box__background"></icon-ellipse>
    <span class="box__dollars">$420</span>
  </div>
</template>

<script>
import IconEllipse from '@/components/IconEllipse'

export default {
  name: 'StatisticsCircleBox',
  components: {
    'icon-ellipse': IconEllipse
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid white;
  &__background {
    position: absolute;
    top: 20%;
    left: 20%;
  }
  &__dollars {
    font-size: 28px;
    position: absolute;
    top: 43%;
    left: 40%;
  }
}
</style>
