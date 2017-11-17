<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import vHeader from './components/Header/Header'
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style>
</style>
