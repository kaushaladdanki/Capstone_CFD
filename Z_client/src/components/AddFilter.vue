<template>
    <!-- Add Filter Modal -->
    <div class="modal-overlay" id="fModal">     
      <div class="modal">
        <button class="close-button" type="button" @click.prevent="closeThis">X</button>
        <div class="modal-header">
            <h2>Add Filter</h2>
        </div>
        <p>Zoe was here</p> 
        <p>So was Charlie</p> 
        <form>
            <label>Feature:</label>
            <input type="text" required v-model="temp1" >
            <br>
            <label>Lower Bound:</label>
            <input type="text" required v-model="temp2" >
            <br>
            <label>Upper Bound:</label>
            <input type="text" required v-model="temp3" >
            <button class="submit" @click="createFilter">Submit</button>
          </form>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class AddFilter extends Vue {
  temp1 = ""
  temp2 = ""
  temp3 = ""

    closeThis(){
        this.$emit("closeModalFilter");
    }

    createFilter(){
      var info: string = this.temp1 + " is between " + this.temp2 + " and " + this.temp3;
      this.$emit("createNewFilter", info);
      this.closeThis();
    }

}

</script>
<style scoped lang="less">
@purp: #222249;
@tan: #12f7f0;
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
</style>
