<template>
  <!-- Add Filter Modal -->
  <div class="modal-overlay" id="fModal" @click.prevent="checkValidity">     
    <div class="modal" >
      <button class="close-button" type="button" @click.prevent="closeThis">X</button>
      <fieldset>
        <legend>Create A Filter</legend>
        <br />
        <label for="selFeat">Select Feature type:</label>
        <select id="selFeat" v-model="featureType">
          <option disabled value="">Select Feature Type</option>
          <option v-for="t in types" :key="t" :value="t" @click.prevent="updateType(t)">{{ t }}</option>
        </select>
        <br />
        
        <!-- could potentially base string bassed to feat off of string used in a v-for from a list displayed with {{ like above }}-->
        <div v-if="featureType==='Race'" >
          <br />
          <br />
          <label>Select feature to be removed from dataset.</label>
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
          <!-- There are currently no faces categorized as Other
          <button type="button" @click.prevent="selectFeat('Other')">Other</button> -->
        </div>

        <div v-if="featureType==='Gender'" >
          <br />
          <br />
          <label>Select feature to be removed from dataset.</label>
          <br />
          <br />
          <button type="button" @click.prevent="selectFeat('Male')">Male</button>
          <br />
          <br />
          <button type="button" @click.prevent="selectFeat('Female')">Female</button>
        </div>

        <div v-if="featureType==='Age'">
          <br />
          <p>Range for selected feature must be between {{ min }} and {{ max }}</p>
          <div>
            <label for="aMin">Select Minimum Value of Range </label>
            <input id="aMin" type="number" v-model="featureMin"/>
          </div>
          <br />
          <div>
            <label for="aMax">Select Maximum Value of Range </label>
            <input id="aMax" type="number" v-model="featureMax" />
          </div>
          <div class="modal-header">
              <p>{{ info }}</p>
              <p>{{ i2 }}</p>
          </div>
          <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
        </div>

        <div v-if="featureType==='User Class Data'" >
          <br />
          <label for="pType">Select a Feature: </label>
          <br />
          <select id="pType" v-model="featureString">
            <option disabled value="">Select Feature</option>
            <option v-for="i in feats.slice(5,13)" :key="i" :value="i" >{{ i }}</option>
          </select>
          <p>Range for selected feature must be between {{ min }} and {{ max }}</p>
          <br />
          <div>
            <label for="pMin">Select Minimum Percentage </label>
            <input id="pmin" type="number" v-model="featureMin"  />
          </div>
          <br />
          <div>
            <label for="pMax">Select Maximum Percentage </label>
            <input id="pMax" type="number" v-model="featureMax" />
          </div>
          <div class="modal-header">
              <p>{{info }}</p>
              <p>{{ i2 }}</p>
          </div>
          <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
        </div>

        <div v-if="featureType==='Attributes'" >
          <br />
          <label for="atFeat">Select a Feature:</label>
          <br />
          <select id="atFeat" v-model="featureString" required>
            <option disabled value="">Select Feature</option>
            <option v-for="i in feats.slice(13,29)" :key="i" :value="i" >{{ i }}</option>
          </select>
          <br />
          <p>Range for selected feature must be between {{ min }} and {{ max }}</p>
          <div>
            <label for="atMin">Select Minimum Value of Range </label>
            <input id="atMin" type="number" v-model="featureMin"  />
          </div>
          <br />
          <div>
            <label for="atMax">Select Maximum Value of Range </label>
            <input id="atMax" type="number" v-model="featureMax" />
          </div>
          <div class="modal-header">
              <p>{{ info }}</p>
              <p>{{ i2 }}</p>
          </div>
          <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
        </div>

        <div v-if="featureType==='Face Measurements'" >
          <br />
          <label for="fmFeat">Select a Feature:</label>
          <br />
          <select id="fmFeat" v-model="featureString" required>
            <option disabled value="">Select Feature</option>
            <option v-for="i in feats.slice(56,68)" :key="i" :value="i" >{{ i }}</option>
          </select>
          <br />
          <p>Range for selected feature must be between {{ min }} and {{ max }}</p>
          <div>
            <label for="fmMin">Select Minimum Value of Range </label>
            <input id="fmMin" type="number" v-model="featureMin"  />
          </div>
          <br />
          <div>
            <label for="fmMax">Select Maximum Value of Range </label>
            <input id="fmMax" type="number" v-model="featureMax" />
          </div>
          <div class="modal-header">
              <p>{{ info }}</p>
              <p>{{ i2 }}</p>
          </div>
          <button class="submit" @click="createFilter" :disabled="invalidRange">Add Filter</button>
        </div>
      </fieldset>
      

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// can probably just hard code in feature titles since props aren't loading on chrome (would need to handle adding FO when objects already exist in the list.)
@Options({
props: {
  feats: {
    default: [""]
  }
}
})

export default class AddFilter extends Vue {
featureType = ""
featureString = "_____"
featureMin = 0
featureMax = 1
i2 = ""
min = 0
max = 1
invalidRange = false;
types = ["Race","Gender","Age","User Class Data","Attributes","Face Measurements"]
info = ""
filterObject = {
  feature: "Age",
  category: 'a',
  max: -1,
  min: -1,
  exclude: "White",
  info: ""
}

selectFeat(t: string){
  switch (t) {
    default:
      this.closeThis();
      break;
    case "Male":
      this.filterObject.info = "Male faces will be removed";
      this.filterObject.feature = "Gender";
      this.filterObject.category = "g";
      this.filterObject.exclude = "M";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "Female":
      this.filterObject.info = "Female faces will be removed";
      this.filterObject.feature = "Gender";
      this.filterObject.category = "g";
      this.filterObject.exclude = "F";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "White":
      this.filterObject.info = "White faces will be removed";
      this.filterObject.feature = "White";
      this.filterObject.category = "r";
      this.filterObject.exclude = "W";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "Other":
      this.filterObject.info = "Race: Other faces will be removed";
      this.filterObject.feature = "Other";
      this.filterObject.category = "r";
      this.filterObject.exclude = "O";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "Asian":
      this.filterObject.info = "Asian faces will be removed";
      this.filterObject.feature = "Asian";
      this.filterObject.category = "r";
      this.filterObject.exclude = "A";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "Latino":
      this.filterObject.info = "Latino faces will be removed";
      this.filterObject.feature = "Latino";
      this.filterObject.category = "r";
      this.filterObject.exclude = "L";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
    case "Black":
      this.filterObject.info = "Black faces will be removed"
      this.filterObject.feature = "Black";
      this.filterObject.category = "r";
      this.filterObject.exclude = "B";
      this.$emit("update:filterObject", this.filterObject);
      this.$emit("createNewFilter");
      this.closeThis();
      break;
  }
}

updateType(t: string){
  switch (t) {
    default:
      break;
    case "Age":
      this.min = 10;
      this.max = 90;
      break;
    case "Attributes":
      this.min = 0;
      this.max = 6;
      break;
    case "User Class Data":
      this.min = 0;
      this.max = 100;
      break;
    case "Face Measurements":
      this.min = 0;
      this.max = 450;
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
    this.filterObject.feature = this.featureString;
    this.filterObject.info = this.info;
    this.filterObject.max = this.featureMax;
    this.filterObject.min = this.featureMin;
    switch (this.featureType) {
      default:
        break;
      case "Age":
        this.filterObject.category = 'a';
        break;
      case "Attributes":
        this.filterObject.category = 't';
        break;
      case "User Class Data":
        this.filterObject.category = 'c';        
        this.filterObject.max = this.featureMax/100;
        this.filterObject.min = this.featureMin/100;
        break;
      case "Face Measurements":
        this.filterObject.category = 'm';
        break;
    }
    this.$emit("update:filterObject", this.filterObject);
    this.$emit("createNewFilter");
    this.closeThis();
  }
}

checkValidity(){
  if (this.featureMin > this.max){
    this.featureMin = this.min;
  } else if (this.featureMin < this.min) {
    this.featureMin = this.min;
  }
  if (this.featureMax < this.min) {
    this.featureMax = this.max;
  } else if (this.featureMax > this.max){
    this.featureMax = this.max;
  }
  if (this.featureMin >= this.featureMax) {
    this.invalidRange = true;
    this.i2 = "Warning: The selected range is invalid.";
  }
  else{
    this.invalidRange = false;
    this.i2 = "";
  }
  if (this.featureType==="Age"){
    this.featureString = "Age"
  }
  if (this.featureString === "_____"){
    this.invalidRange = true;
    this.i2 = "You must select a feature to create a filter."
  }
  this.info = this.featureString + " is between " + this.featureMin + " and " + this.featureMax;
}

}



</script>
<style scoped lang="less">

@purp: #222249;
@tan: #b8762a;
@paleblue: #a1a9de;
@brown: #a96149;
legend{
  font-size: 30px;
  font-weight: bold;
}
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
height: 75em;
}
fieldset {
  border-width: 0px;
  font-size: 20px;
  margin-top: 16px;
}
.modal {
box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
border-radius: 5px; 
background-color: @tan;
margin: auto;
width: 300px;
margin-top: 5%;
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