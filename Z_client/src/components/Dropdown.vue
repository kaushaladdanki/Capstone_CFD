<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <b>
            {{ title }}
        </b>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#fff"></path>
        </svg>
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen" >
                <button v-for="i in items" :key="i" @click="setValue(i, ind)" class="menu-item">
                    <b>{{ i }}</b>
                </button>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    items: [String],
    title: String,
    ind: Number,
  },
})

export default class Dropdown extends Vue {
    isOpen = false;


    setValue(t:string, ind:number){
      this.$emit("setValue", t, ind);
    }
}


</script>

<style>
nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
}

nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 16px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>