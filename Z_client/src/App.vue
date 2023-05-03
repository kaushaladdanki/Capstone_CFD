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

/*

  

*/






    
    /*

    console.log("Generating Sample");
    let clusters = this.genClusters(0);
    if (sampleSize <= 0 || clusters.length == 0) return [];
    let minSize = clusters[0].length;
    clusters.forEach(el => {
        if (el.length < minSize) minSize = el.length;
    });
    let maxSampleSize: number = minSize * clusters.length;
    if (sampleSize > maxSampleSize) {
        return [];
    }
    let shuffled = clusters.sort(() => 0.5 - Math.random());

    // Get first sampleSize % clusters.length elements
    let baseCount = Math.floor(sampleSize / clusters.length);
    let extraCount = sampleSize % clusters.length;
    let base: Array<string> = []
    shuffled.forEach((el, ind) => {
        base = base.concat(el.sort(() => 0.5 - Math.random()).splice(0, baseCount + (ind < extraCount ? 1 : 0)));
    });

    this.samp = base;
    this.displaySample = !this.displaySample;

    return base;

    */

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


