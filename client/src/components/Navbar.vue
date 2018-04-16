<template>
  <nav class="navbar">
    <div>I1</div>
    <div>I2</div>
    <div>I3</div>
    <div>I4</div>
    <div>I5</div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 53px;
}
</style>
