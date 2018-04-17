<template>
<svg class="ellipse-background">
  <!-- <path d="M0,5c0,2.21 1.79,4 4,4c2.21,0 4,-1.79 4,-4c0,-2.21 -1.79,-4 -4,-4c-2.21,0 -4,1.79 -4,4z" /> -->
  <circle cx="111" cy="111" r="100" stroke="black" stroke-width="15" fill="none" />
</svg>
</template>

<script>
export default {
  name: 'EllipseBackground'
}
</script>

<style lang="scss" scoped>

.ellipse-background {
  border: 1px solid red;
  fill: blue;
  height: 222px;
  width: 222px;
}
</style>