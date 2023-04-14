<template>
    <!-- Sample Modal -->
    <div class="modal-overlay" id="sModal">     
      <div class="modal">
        <button class="close-button" type="button" @click.prevent="closeThis">X</button>
        <div class="modal-header">
          <h2>Generate Sample</h2>
          <form>
            <label for="sample-size-picker">Sample Size: </label>
            <input type="number" id="sample-size-picker" required v-model="sampleSize" min="1" />
            <button class="submit" :disabled="!validSampleSize" @click.prevent="genSample()">Submit</button>
            <p v-if="!validSampleSize" id="sample-size-error-message">Invalid sample size</p>
            <!-- <button type="button" @click.prevent="tester()">{{ test }}</button> -->
            
          </form>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Sample extends Vue {
  sampleSize = 5;
  dbSize = 30;
  test = 5

  tester(){
    this.test = Math.floor(Math.random() * 100)
  }

  get validSampleSize() {
      return (this.sampleSize > 0 && this.sampleSize < this.dbSize-1);
  }
  genSample(){
      this.$emit("genSample", this.sampleSize);
      this.closeThis();
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
