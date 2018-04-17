<template>
  <div class="box">
    <ellipse-background class="box__background"></ellipse-background> 
    <span class="box__dollars">$420</span>
  </div>
</template>

<script>
import EllipseBackground from '@/components/EllipseBackground'

export default {
  name: 'StatisticsCircleBox',
  components: {
    'ellipse-background': EllipseBackground
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
    z-index: 0;
  }
  &__dollars {
    font-size: 28px;
    position: absolute;
    top: 43%;
    left: 40%;
  }
}
</style>
