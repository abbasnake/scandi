<template>
<svg class="icon-decrease">
  <path d="M0.34,1.26c-0.38,0.41 -0.38,1.07 0,1.48l3.99,4.24c0.38,0.41 1,0.41 1.39,0l3.04,-3.23l2.31,2.45l-0.72,0.76c-0.26,0.27 -0.14,0.74 0.21,0.84l3.74,1.06c0.35,0.1 0.68,-0.24 0.58,-0.62l-1,-3.97c-0.09,-0.37 -0.54,-0.5 -0.79,-0.23l-0.63,0.67l-3,-3.19c-0.38,-0.41 -1.01,-0.41 -1.39,0l-3.04,3.23l-3.3,-3.51c-0.19,-0.2 -0.44,-0.31 -0.69,-0.31c-0.25,0 -0.5,0.1 -0.7,0.31z" />
</svg>
</template>

<script>
export default {
  name: 'IconDecrease'
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.icon-decrease {
  fill: $accent-red;
  height: 9px;
  width: 16px;
}
</style>
