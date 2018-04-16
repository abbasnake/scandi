<template>
  <svg class="icon-flag">
    <path d="M10.96,19.76c0.59,0.91 1.72,1.26 2.7,0.83v0c0.81,-0.36 1.34,-1.18 1.34,-2.09v-15.89c0,-1 -0.81,-1.81 -1.8,-1.81h-11.4c-0.99,0 -1.8,0.81 -1.8,1.81v15.91c0,0.91 0.53,1.74 1.34,2.09l0,0c0.98,0.43 2.11,0.08 2.7,-0.83l3.47,-5.38z" />
  </svg>
</template>

<script>
export default {
  name: 'IconFlag'
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.icon-flag {
  fill: $icon-grey;
  height: 21px;
  width: 16px;
}
</style>
