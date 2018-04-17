<template>
  <div id="app">
    <!-- <transition name="slide-fade"> -->
      <router-view/>
    <!-- </transition> -->
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

.slide-fade-enter-active {
  transition: all 0.9s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter {
  transform: translateX(-1000px);
  opacity: 0;
}

.slide-fade-leave-to{
  transform: translateX(-1000px);
  opacity: 0;
}
</style>
