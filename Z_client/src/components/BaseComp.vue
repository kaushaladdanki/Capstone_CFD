<template>
  <div class="hello">
    <h1>{{ fullName }}</h1>
    <!-- Handle filter modal -->
    <AddFilter v-if="showModalFilter" @closeModalFilter="toggleModalFilter()" @createNewFilter="addNewFilter" />
    <button @click="toggleModalFilter()">Add Filter</button>
    <div class="filter" v-for="f in filterList" :key="f">
      <p class="filter-text">{{f}}</p>
    </div>

    <!-- Handle machine learning modal -->
    <MachineLearning v-if="showModalML" @closeModalML="toggleModalML()" />
    <button @click="toggleModalML()">Work on ML</button>

    <!-- Handle sample modal -->
    <Sample v-if="showModalSample" @closeModalSample="toggleModalSample()" />
    <button @click="toggleModalSample()">Work on Sample</button>

    <!-- This is just a rectangle that changes color on button press and counts the number of presses -->
    <button @click="incrementCounter()">Another one!</button>
    <h3>{{ counter }} </h3>
    <div>
        <svg width="600px" height="200px">
            <rect width="100%" height="100%" v-bind:class="{'purp': clicked == 0, 'blue': clicked == 1, 'tan': clicked == 2, 'brown': clicked == 3}" />
        </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AddFilter from './AddFilter.vue';
import MachineLearning from './MachineLearning.vue';
import Sample from './Sample.vue';

@Options({
  components: {
    AddFilter, MachineLearning, Sample
  },
  props: {
    firstName: String,
    lastName: String
  }
})
export default class BaseComp extends Vue {
  firstName = "Hello"
  lastName = "World"
  showModalFilter = false
  showModalML = false
  showModalSample = false
  clicked = 0
  counter = 0
  filterList = ["Eye Height is between 150 and 200", "Eye Width is between 210 and 230"]

  toggleModalFilter() {
    this.showModalFilter = !this.showModalFilter
  }

  toggleModalML() {
    this.showModalML = !this.showModalML
  }

  toggleModalSample() {
    this.showModalSample = !this.showModalSample
  }

  incrementCounter(){
    this.counter++;
    this.clicked = this.counter%4
  }

  addNewFilter(info:string){
    this.filterList.push(info)
  }

  get fullName() {
    return this.firstName + this.lastName;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@purp: #222249;
@tan: #b8762a;
@paleblue: #a1a9de;
@brown: #a96149;
.purp{fill: @purp}
.blue{fill: @paleblue}
.tan{fill: @tan}
.brown{fill: @brown}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
