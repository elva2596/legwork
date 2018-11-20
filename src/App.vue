<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/reset.css'
import '@/assets/main.css'
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
