<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('loadData') // load data when app is mounted
  }
}
</script>

<!-- GLOBAL STYLE SETTINGS -->
<style lang="scss">
@import './scss/reset';
@import './scss/variables';
@import './scss/global-styles';
</style>

<!-- LOCAL STYLE SETTINGS -->
<style lang="scss" scoped>
@import './scss/variables';

#app {
  background-color: $main-dark;
  height: 100vh;
}
</style>
