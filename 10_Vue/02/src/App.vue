<template>
  <div id="app">
    <!-- display: inline -->
    <Menu inline item1="HTML" item2="CSS" item3="JavaScript" item4="DOM"/>
    <!-- display: block -->
    <Menu item1="HTML" item2="CSS" item3="JavaScript" item4="DOM"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>