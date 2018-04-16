<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- GLOBAL STYLE SETTINGS -->
<style lang="scss">
@import './scss/reset';
</style>

<!-- LOCAL STYLE SETTINGS -->
<style lang="scss" scoped>
@import './scss/global-styles';
@import './scss/variables';

#app {
  background-color: $main-dark;
  height: 100vh;
}
</style>
