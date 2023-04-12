<template>
  <!--- <img alt="Vue logo" src="./assets/logo.png"> -->
  <BaseComp />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BaseComp from './components/BaseComp.vue';

@Options({
  components: {
    BaseComp,
  },
})
export default class App extends Vue {}
</script>

<style>
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<!--
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

body {
  font-family: 'monsterrat', sans-serif;
}

-->
