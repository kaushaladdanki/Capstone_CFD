<template>
    <!-- Sample Modal -->
    <div class="modal-overlay" id="sModal">     
      <div class="modal">
        <button class="close-button" type="button" @click.prevent="closeThis">X</button>
        <fieldset class="modal-header">
          <legend>Generate Sample</legend>
            <label for="sample-type">Sample Type</label>
            <select id="selSamp" v-model="sType">
                <option disabled value="">Select Feature Type</option>
                <option v-for="s in stypes" :key="s" :value="s" @click.prevent="updateSize(dbSize)">{{ s }}</option>
            </select>
            <br />
            <br />
            <div v-if="sType==='Stratified'">
              <label for="sample-size-picker">Sample Size: </label>
              <input type="number" id="sample-size-picker" required v-model="sampleSize" min="2" />
              <br />
              <p>Range for sample size must be between 2 and {{ dbSize }}</p>
              <br />
              <label for="selFeat">Select Feature type:</label>
              <select id="selFeat" v-model="featureType" required>
                <option disabled value="">Select Feature Type</option>
                <option v-for="t in types" :key="t" :value="t" @click.prevent="updateType(t)">{{ t }}</option>
              </select>
              <br />
              <br />
              <button class="submit" :disabled="!validSampleSizeS" @click.prevent="genSampleS()">Submit</button>
              <p v-if="!validSampleSizeS" id="sample-size-error-message">Invalid sample size</p>
            </div>
            <div v-if="sType==='Random'">
              <label for="sample-size-picker">Sample Size: </label>
              <input type="number" id="sample-size-picker" required v-model="sampleSize" min="1" />
              <br />
              <p>Range for sample size must be between 1 and {{ dbSize }}</p>
              <br />
              <button class="submit" :disabled="!validSampleSizeR" @click.prevent="genSampleR()">Submit</button>
              <p v-if="!validSampleSizeR" id="sample-size-error-message">Invalid sample size</p>
            </div>
            
            <!-- <button type="button" @click.prevent="tester()">{{ test }}</button> -->
            
        </fieldset>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
props: {
  dbSize: {
    default: -1
  }
}
})

export default class Sample extends Vue {
  sampleSize = 5;
  test = 5;
  types = ["User Class Data","Attributes","Face Measurements"];
  stypes = ["Stratified", "Random"]
  featureType = ""
  sType = ""
  dSize = -1;

  tester(){
    this.test = Math.floor(Math.random() * 100)
  }

  get validSampleSizeR() {
      return (this.sampleSize > 0 && this.sampleSize <= this.dSize);
  }
  
  get validSampleSizeS() {
      return (this.sampleSize > 1 && this.sampleSize <= this.dSize);
  }
  genSampleR(){
      this.$emit("genSampleR", this.sampleSize);
      this.closeThis();
  }  

  genSampleS(){
      this.$emit("genSampleS", this.sampleSize);
      this.closeThis();
  }  

  updateSize(ds: number) {
    this.dSize = ds;
    this.sampleSize = ds;
  }

  updateType(t: string) {
    this.$emit("setSampType", t)
  }
  
  closeThis(){
        this.$emit("closeModalSample");
    }

}

</script>
<style scoped lang="less">
@purp: #222249;
@tan: #b8762a;
@paleblue: #a1a9de;
@brown: #a96149;
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
  width: clamp(200px, 50%, 600px);
  box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
  border-radius: 25px; 
  background-color: @tan;
  margin: auto;
  height: 50%;
  margin-top: 20%;
  position: relative;
  overflow-y: auto;
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
#sample-size-error-message {
    color: red;
}
</style>
