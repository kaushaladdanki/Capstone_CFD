<template>
    
    <div>
        <Dropdown title="Feature" :items="feats" :ind=ind1 @setValue="setValue()" />

       
        

        <Dropdown title="Min" :items="mins" :ind=ind2 @setValue="setValue()" />
        <Dropdown title="Max" :items="maxes" :ind=ind3 @setValue="setValue()" />
        <b>
            {{ ex }}
        </b>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dropdown from './Dropdown.vue';

@Options({
  components: {
    Dropdown,
  },
})
export default class Navbar extends Vue {
    name = 'navbar';
    feats = ["feat_1","feat_2","feat_3","feat_4","feat_5"];
    mins = ["12","10","11","10","20"]
    maxes = ["200","300","320","330","330"]
    ind1 = 0
    ind2 = 1
    ind3 = 2
    ex = "ex string"
    value = 50
    total = 500


    setValue(t:string, id:number){
      this.$emit("setValue", t, id);
      this.ex = t;
    }

    setTotal(){
        this.total = this.value * 10
    }

    
}

</script>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: #fff;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
</style>