<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Copyright/>
  </div>
</template>

<script>


import Header from "@/components/Header";
import Copyright from "@/components/Copyright";
export default {
  name: 'App',
  components: {
    Copyright,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
