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

  // This function will be called when the user submits a number using the sample modal form
  // genSamp pulls one random face from each cluster of faces
  genSampS(s: number){
    // s is the sample size recieved from the sample modal form
    // samp is the name of the array of strings that is displayed once this function exicutes
    var clusters = [["AF-209","AF-234","AF-210","AF-239"],["AF-211","AF-293"],["AF-423"],["AF-514","AF-269","AF-272","AF-277"],["AF-201","AF-223","AF-299","AF-342","AF-419"]]
    this.test3.push(this.sampType);
    this.sampError = false;
    switch (this.sampType){
      default:
        this.sampEm = "Stratified samples require a feature type to be specified to culster on."
        this.sampError = true;
        break;
      case "Attributes":
        clusters = this.attClusters(s);
        break;
      case "Face Measurements":
        //clusters = this.measClusters(s);
        break;
      case "User Class Data":
        //clusters = this.classClusters(s);
        break;
      case "All Features":
        //clusters = this.genClusters(s);
    }
  }



  // perhapse set limit on samples sizes to samples of 20 or something if takes to long to measure
  attClusters(k:number) {
    var attClust = [[""]];
    //dbFaces.slice(13,29)

    
    var centroids = this.initCentroids(k);

    // measure all points to centroids and assign clusters

    var tface1 = this.dbFaces[0];
    var tface2 = this.dbFaces[1];
    var tfaces = [{face:[""], cluster:-1}];
    tfaces.shift();
    var count = 0;

    for(var tf in this.dbFaces){
      tfaces.push({face:this.dbFaces[tf], cluster:-1});
      var tMinDist = Number.MAX_VALUE;
      for(var tc in centroids){
        var tdTest = 0;
        tface1 = tfaces[count].face;
        tface2 = centroids[tc].face;
        tdTest = this.getDistanceAtt(tface1, tface2);
        if(tdTest < tMinDist){
          tMinDist = tdTest;
          tfaces[count].cluster = centroids[tc].cluster;
        }
      }
      count = count + 1;
    }

    this.test2dA = tfaces;
    this.test = tfaces.length;
    
    

    
    var dist = this.getDistanceAtt(tface1, tface2);

    this.test2.push(dist);

    // remeasure new clusters and repeat until centroids stop changing position.

    // return string of clusters
    return attClust;
  }

  getDistanceAtt(face1: string[], face2: string[]){
    var tsum = 0;
    for (var i = 13; i <= 28; i++){
      if(i===24){
        //pass because suitability has null values in the database
      }
      else{
        var t1 = Number(face1[i]);
        var t2 = Number(face2[i]);
        var tdiff = t1-t2;
        tsum = tsum + (tdiff*tdiff);
      }
    }
    return Math.sqrt(tsum);
  }

  measClusters(face1: string[], face2: string[]) {
    var measClust = [[""]];
    var tsum = 0;
    for (var i = 13; i <= 28; i++){
      if(i===24){
        //pass because suitability has null values in the database
      }
      else{
        var t1 = Number(face1[i]);
        var t2 = Number(face2[i]);
        var tdiff = t1-t2;
        tsum = tsum + (tdiff*tdiff);
        this.test2.push(i);
        this.test2.push(t1);
        this.test2.push(t2);
        this.test2.push(tdiff);
        this.test2.push(tsum);
        this.test2.push(-100);
      }
    }

    return measClust;
  }

  classClusters(face1: string[], face2: string[]) {
    var classClust = [[""]];
    var tsum = 0;
    for (var i = 13; i <= 28; i++){
      if(i===24){
        //pass because suitability has null values in the database
      }
      else{
        var t1 = Number(face1[i]);
        var t2 = Number(face2[i]);
        var tdiff = t1-t2;
        tsum = tsum + (tdiff*tdiff);
        this.test2.push(i);
        this.test2.push(t1);
        this.test2.push(t2);
        this.test2.push(tdiff);
        this.test2.push(tsum);
        this.test2.push(-100);
      }
    }

    return classClust;
  }

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


