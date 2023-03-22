<template>
  <!-- Add Filter Modal -->
  <div class="modal-overlay" id="fModal" @click.prevent="checkValidity">     
    <div class="modal" >
      <button class="close-button" type="button" @click.prevent="closeThis">X</button>
      <header >
        <!--<Navbar @setValue="setFeature()"/> -->
        Create A Filter
      </header>
      <br />
      Select Feature type:
      <select v-model="temp0">
        <option disabled value="">Select Feature Type</option>
        <option v-for="t in types" :key="t" :value="t" @click.prevent="updateType(t)">{{ t }}</option>
      </select>
      <br />
      
      <div v-if="temp0==='Race'" >
        <br />
        <br />
        Select feature to be removed from dataset.
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Asian')">Asian</button>
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Black')">Black</button>
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Latino')">Latino</button>
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('White')">White</button>
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Other')">Other</button>
      </div>

      <div v-if="temp0==='Gender'" >
        <br />
        <br />
        Select feature to be removed from dataset.
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Male')">Male</button>
        <br />
        <br />
        <button type="button" @click.prevent="selectFeat('Female')">Female</button>
      </div>

      <div v-if="temp0==='Age'" >
        <br />
        <br />
        Range for selected feature must be between {{ min }} and {{ max }}
        <br />
        <br />
        <div>
          Select Minimum Value of Range
          <input type="number" v-model="temp2"  />
        </div>
        <br />
        <div>
          Select Maximum Value of Range
          <input type="number" v-model="temp3" />
        </div>
        <div class="modal-header">
            <h2>{{ info }}</h2>
            <h2>{{ i2 }}</h2>
        </div>
        <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
      </div>

      <div v-if="temp0==='Race Prop'" >
        Select a Feature?:
        <select v-model="temp1">
          <option disabled value="">Select Feature</option>
          <option v-for="i in feats.slice(5,13)" :key="i" :value="i" >{{ i }}</option>
        </select>
        <br />
        <br />
        Range for selected feature must be between {{ min }} and {{ max }}
        <br />
        <br />
        <div>
          Select Minimum Value of Range
          <input type="number" v-model="temp2"  />
        </div>
        <br />
        <div>
          Select Maximum Value of Range
          <input type="number" v-model="temp3" />
        </div>
        <div class="modal-header">
            <h2>{{ info }}</h2>
            <h2>{{ i2 }}</h2>
        </div>
        <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
      </div>

      <div v-if="temp0==='Attributes'" >
        Select a Feature:
        <select v-model="temp1">
          <option disabled value="">Select Feature</option>
          <option v-for="i in feats.slice(13,29)" :key="i" :value="i" >{{ i }}</option>
        </select>
        <br />
        <br />
        Range for selected feature must be between {{ min }} and {{ max }}
        <br />
        <br />
        <div>
          Select Minimum Value of Range
          <input type="number" v-model="temp2"  />
        </div>
        <br />
        <div>
          Select Maximum Value of Range
          <input type="number" v-model="temp3" />
        </div>
        <div class="modal-header">
            <h2>{{ info }}</h2>
            <h2>{{ i2 }}</h2>
        </div>
        <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
      </div>

      <div v-if="temp0==='Face Measurements'" >
        Select a Feature:
        <select v-model="temp1">
          <option disabled value="">Select Feature</option>
          <option v-for="i in feats.slice(56,68)" :key="i" :value="i" >{{ i }}</option>
        </select>
        <br />
        <br />
        Range for selected feature must be between {{ min }} and {{ max }}
        <br />
        <br />
        <div>
          Select Minimum Value of Range
          <input type="number" v-model="temp2"  />
        </div>
        <br />
        <div>
          Select Maximum Value of Range
          <input type="number" v-model="temp3" />
        </div>
        <div class="modal-header">
            <h2>{{ info }}</h2>
            <h2>{{ i2 }}</h2>
        </div>
        <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
props: {
  faces: {
    default: [[""]]
  },
  feats: {
    default: [""]
  }
}
})

export default class AddFilter extends Vue {

temp0 = ""
temp1 = "_____"
temp2 = 0
temp3 = 1
info = ""
i2 = ""
min = 0
max = 1
invalidRange = false;
types = ["Race","Gender","Age","Race Prop","Attributes","Face Measurements"]

selectFeat(t: string){
  var info = ""
  switch (t) {
    default:
      this.closeThis();
      break;
    case "Male":
      info = "Male faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
    case "Female":
      info = "Feale faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
    case "White":
      info = "White faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
    case "Other":
      info = "Race: Other faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
    case "Asian":
      info = "Asian faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
    case "Latino":
      info = "Latino faces will be removed"
      this.$emit("createNewFilter", info);
      this.closeThis();
      break;
  }
}

updateType(t: string){
  switch (t) {
    default:
      break;
    case "Age":
      this.min = 20;
      this.max = 80;
      break;
    case "Attributes":
      this.min = 0;
      this.max = 6;
      break;
    case "Race Prop":
      this.min = 0;
      this.max = 100;
      break;
    case "Face Measurements":
      this.min = 80;
      this.max = 350;
      break;
  }
}

closeThis(){
    this.$emit("closeModalFilter");
}

createFilter(){
  this.checkValidity();
  if(this.invalidRange){
    this.closeThis();
  }
  else{
    var info: string = this.temp1 + " is between " + this.temp2 + " and " + this.temp3;
    this.$emit("createNewFilter", info);
    this.closeThis();
  }
}

checkValidity(){
  if (this.temp2 > this.max){
    this.temp2 = this.min;
  } else if (this.temp2 < this.min) {
    this.temp2 = this.min;
  }
  if (this.temp3 < this.min) {
    this.temp3 = this.max;
  } else if (this.temp3 > this.max){
    this.temp3 = this.max;
  }
  if (this.temp2 >= this.temp3) {
    this.invalidRange = true;
    this.i2 = "Warning: The selected range is invalid.";
  }
  else{
    this.invalidRange = false;
    this.i2 = "";
  }
  this.info = this.temp1 + " is between " + this.temp2 + " and " + this.temp3;
}

}



</script>
<style scoped lang="less">

@purp: #222249;
@tan: #b8762a;
@paleblue: #a1a9de;
@brown: #a96149;
header {
width: 100vw;
background-color: #222;
padding: 15px;
color: #fff;
}
.modal-overlay {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 98;
background-color: #32323277;
}
.modal {
box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
border-radius: 25px; 
background-color: @tan;
margin: auto;
height: 50%;
margin-top: 20%;
position: relative;
overflow-y: auto;
color: #fff;
}
.modal-body {
color: #ffffff;
}
.modal-header {
color: #ffffff;
padding-top: 3px;
}
.close-button {
position: absolute;
top: 15px; 
right: 15px;
}
.filter {
width: 100%;
height: 50px;
margin: 20px 0px 12px 0px;
box-sizing: border-box;
position: relative;
}
.filter-text {
padding: 15px 0px 0px 7px;
width: 80%;
text-align: left;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}
</style>
cl